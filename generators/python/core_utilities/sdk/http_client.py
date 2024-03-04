import asyncio
import email.utils
import re
import time
import typing
from functools import wraps
from random import random

import httpx

INITIAL_RETRY_DELAY_SECONDS = 0.5
MAX_RETRY_DELAY_SECONDS = 10
MAX_RETRY_DELAY_SECONDS_FROM_HEADER = 30


def _parse_retry_after(response_headers: httpx.Headers) -> typing.Optional[float]:
    """
    This function parses the `Retry-After` header in a HTTP response and returns the number of seconds to wait.

    Inspired by the urllib3 retry implementation.
    """
    retry_after_ms = response_headers.get("retry-after-ms")
    if retry_after_ms is not None:
        try:
            return int(retry_after_ms) / 1000 if retry_after_ms > 0 else 0
        except Exception:
            pass

    retry_after = response_headers.get("retry-after")
    if retry_after is None:
        return None

    # Attempt to parse the header as an int.
    if re.match(r"^\s*[0-9]+\s*$", retry_after):
        seconds = float(retry_after)
    # Fallback to parsing it as a date.
    else:
        retry_date_tuple = email.utils.parsedate_tz(retry_after)
        if retry_date_tuple is None:
            return None
        if retry_date_tuple[9] is None:  # Python 2
            # Assume UTC if no timezone was specified
            # On Python2.7, parsedate_tz returns None for a timezone offset
            # instead of 0 if no timezone is given, where mktime_tz treats
            # a None timezone offset as local time.
            retry_date_tuple = retry_date_tuple[:9] + (0,) + retry_date_tuple[10:]

        retry_date = email.utils.mktime_tz(retry_date_tuple)
        seconds = retry_date - time.time()

    if seconds < 0:
        seconds = 0

    return seconds


def _retry_timeout(response: httpx.Response, retries: int) -> float:
    """
    Determine the amount of time to wait before retrying a request.
    This function begins by trying to parse a retry-after header from the response, and then proceeds to use exponential backoff
    with a jitter to determine the number of seconds to wait.
    """

    # If the API asks us to wait a certain amount of time (and it's a reasonable amount), just do what it says.
    retry_after = _parse_retry_after(response.headers)
    if retry_after is not None and retry_after <= MAX_RETRY_DELAY_SECONDS_FROM_HEADER:
        return retry_after

    # Apply exponential backoff, capped at MAX_RETRY_DELAY_SECONDS.
    retry_delay = min(INITIAL_RETRY_DELAY_SECONDS * pow(2.0, retries), MAX_RETRY_DELAY_SECONDS)

    # Add a randomness / jitter to the retry delay to avoid overwhelming the server with retries.
    timeout = retry_delay * (1 - 0.25 * random())
    return timeout if timeout >= 0 else 0


def _should_retry(response: httpx.Response) -> bool:
    retriable_400s = [429, 408, 409]
    return response.status_code >= 500 or response.status_code in retriable_400s


class HttpClient:
    def __init__(self, *, httpx_client: httpx.Client):
        self.httpx_client = httpx_client

    # Ensure that the signature of the `request` method is the same as the `httpx.Client.request` method
    @wraps(httpx.Client.request)
    def request(
        self, *args: typing.Any, max_retries: int = 0, retries: int = 0, **kwargs: typing.Any
    ) -> httpx.Response:
        response = self.httpx_client.request(*args, **kwargs)
        if _should_retry(response=response):
            if max_retries > retries:
                time.sleep(_retry_timeout(response=response, retries=retries))
                return self.request(max_retries=max_retries, retries=retries + 1, *args, **kwargs)
        return response

    @wraps(httpx.Client.stream)
    def stream(self, *args: typing.Any, max_retries: int = 0, retries: int = 0, **kwargs: typing.Any) -> typing.Any:
        return self.httpx_client.stream(*args, **kwargs)


class AsyncHttpClient:
    def __init__(self, *, httpx_client: httpx.AsyncClient):
        self.httpx_client = httpx_client

    # Ensure that the signature of the `request` method is the same as the `httpx.Client.request` method
    @wraps(httpx.AsyncClient.request)
    async def request(
        self, *args: typing.Any, max_retries: int = 0, retries: int = 0, **kwargs: typing.Any
    ) -> httpx.Response:
        response = await self.httpx_client.request(*args, **kwargs)
        if _should_retry(response=response):
            if max_retries > retries:
                await asyncio.sleep(_retry_timeout(response=response, retries=retries))
                return await self.request(max_retries=max_retries, retries=retries + 1, *args, **kwargs)
        return response

    @wraps(httpx.AsyncClient.request)
    async def stream(
        self, *args: typing.Any, max_retries: int = 0, retries: int = 0, **kwargs: typing.Any
    ) -> typing.Any:
        return self.httpx_client.stream(*args, **kwargs)
