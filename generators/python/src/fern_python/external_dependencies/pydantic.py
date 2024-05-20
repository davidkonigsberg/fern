import enum

from fern_python.codegen import AST
from fern_python.codegen.filepath import Filepath

PYDANTIC_DEPENDENCY = AST.Dependency(name="pydantic", version=">= 1.9.2")


class PydanticVersionCompatibility(str, enum.Enum):
    V1 = "v1"
    V2 = "v2"
    Both = "both"


def _export(*export: str) -> AST.ClassReference:
    return AST.ClassReference(
        import_=AST.ReferenceImport(
            module=AST.Module.external(
                dependency=PYDANTIC_DEPENDENCY,
                module_path=("pydantic",),
            ),
        ),
        qualified_name_excluding_import=export,
    )

class Pydantic:
    @staticmethod
    def Field() -> AST.ClassReference:
        return _export("Field")

    @staticmethod
    def BaseModel() -> AST.ClassReference:
        return _export("BaseModel")

    @staticmethod
    def PrivateAttr() -> AST.ClassReference:
        return _export("PrivateAttr")

    class Extra:
        @staticmethod
        def forbid() -> AST.Expression:
            return AST.Expression(_export("Extra", "forbid"))

        @staticmethod
        def allow() -> AST.Expression:
            return AST.Expression(_export("Extra", "allow"))

    @staticmethod
    def root_validator(pre: bool = False) -> AST.FunctionInvocation:
        return AST.FunctionInvocation(
            function_definition=_export("root_validator"),
            args=[AST.Expression(expression=f'pre={"True" if pre else "False"}')],
        )

    @staticmethod
    def validator(field_name: str, pre: bool = False) -> AST.FunctionInvocation:
        return AST.FunctionInvocation(
            function_definition=_export("validator"),
            args=[AST.Expression(expression=f'"{field_name}", pre={"True" if pre else "False"}')],
        )
