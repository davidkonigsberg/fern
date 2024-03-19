# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ....commons.language import Language
from .basic_custom_files import BasicCustomFiles
from .file_info_v_2 import FileInfoV2
from .files import Files

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class CustomFiles_Basic(BasicCustomFiles):
    type: typing.Literal["basic"]

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


class CustomFiles_Custom(pydantic.BaseModel):
    type: typing.Literal["custom"]
    value: typing.Dict[Language, Files]


CustomFiles = typing.Union[CustomFiles_Basic, CustomFiles_Custom]
