from dataclasses import dataclass

import fern.generator_exec.resources as generator_exec

from fern_python.codegen import AST


@dataclass
class EndpointExpression:
    endpoint_id: generator_exec.EndpointIdentifier
    expr: AST.Expression
