# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .generic_create_problem_error import GenericCreateProblemError

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class CreateProblemError_Generic(GenericCreateProblemError):
    error_type: typing.Literal["generic"] = pydantic.Field(alias="_type")

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


CreateProblemError = typing.Union[CreateProblemError_Generic]
