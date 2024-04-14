/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const PasswordOAuthScheme: core.serialization.ObjectSchema<
    serializers.PasswordOAuthScheme.Raw,
    FernOpenapiIr.PasswordOAuthScheme
> = core.serialization
    .objectWithoutOptionalProperties({
        tokenEndpoint: core.serialization.string(),
        refreshEndpoint: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseOauthSecurityScheme));

export declare namespace PasswordOAuthScheme {
    interface Raw extends serializers.BaseOauthSecurityScheme.Raw {
        tokenEndpoint: string;
        refreshEndpoint?: string | null;
    }
}