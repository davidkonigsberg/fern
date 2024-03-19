# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .http_client import AsyncHttpClient, HttpClient


class BaseClientWrapper:
    def __init__(self, *, api_key: typing.Union[str, typing.Callable[[], str]], base_url: str):
        self._api_key = api_key
        self._base_url = base_url

    def get_headers(self) -> typing.Dict[str, str]:
        headers: typing.Dict[str, str] = {
            "X-Fern-Language": "Python",
            "X-Fern-SDK-Name": "fern_bearer-token-environment-variable",
            "X-Fern-SDK-Version": "0.0.1",
        }
        headers["Authorization"] = f"Bearer {self._get_api_key()}"
        return headers

    def _get_api_key(self) -> str:
        if isinstance(self._api_key, str):
            return self._api_key
        else:
            return self._api_key()

    def get_base_url(self) -> str:
        return self._base_url


class SyncClientWrapper(BaseClientWrapper):
    def __init__(
        self, *, api_key: typing.Union[str, typing.Callable[[], str]], base_url: str, httpx_client: httpx.Client
    ):
        super().__init__(api_key=api_key, base_url=base_url)
        self.httpx_client = HttpClient(httpx_client=httpx_client)


class AsyncClientWrapper(BaseClientWrapper):
    def __init__(
        self, *, api_key: typing.Union[str, typing.Callable[[], str]], base_url: str, httpx_client: httpx.AsyncClient
    ):
        super().__init__(api_key=api_key, base_url=base_url)
        self.httpx_client = AsyncHttpClient(httpx_client=httpx_client)
