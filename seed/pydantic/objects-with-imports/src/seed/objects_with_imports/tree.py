# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from .core.datetime_utils import serialize_datetime
from .node import Node

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class Tree(pydantic.BaseModel):
    """
    from seed.objects_with_imports import Node, Tree
    from seed.objects_with_imports.resources.commons import Metadata

    Tree(
        nodes=[
            Node(
                id="node-8dvgfja2",
                label="left",
                metadata=Metadata(
                    id="metadata-kjasf923",
                    data={"foo": "bar", "baz": "qux"},
                ),
            ),
            Node(
                id="node-cwda9fi2x",
                label="right",
                metadata=Metadata(
                    id="metadata-lkasdfv9j",
                    data={"one": "two", "three": "four"},
                ),
            ),
        ],
    )
    """

    nodes: typing.Optional[typing.List[Node]]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        json_encoders = {dt.datetime: serialize_datetime}