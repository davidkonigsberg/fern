# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from .object_value import ObjectValue
from .primitive_value import PrimitiveValue

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class FieldValue_PrimitiveValue(pydantic.BaseModel):
    type: typing.Literal["primitive_value"]
    value: PrimitiveValue

    class Config:
        frozen = True
        smart_union = True


class FieldValue_ObjectValue(ObjectValue):
    type: typing.Literal["object_value"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class FieldValue_ContainerValue(pydantic.BaseModel):
    type: typing.Literal["container_value"]
    value: ContainerValue

    class Config:
        frozen = True
        smart_union = True


FieldValue = typing.Union[FieldValue_PrimitiveValue, FieldValue_ObjectValue, FieldValue_ContainerValue]
from .container_value import ContainerValue  # noqa: E402

FieldValue_ContainerValue.update_forward_refs(ContainerValue=ContainerValue, FieldValue=FieldValue)