from typing import List

from ..commons.with_docs import WithDocs
from .auth_scheme import AuthScheme
from .auth_schemes_requirement import AuthSchemesRequirement


class ApiAuth(WithDocs):
    requirement: AuthSchemesRequirement
    schemes: List[AuthScheme]
