/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const OauthAccessTokenFields: core.serialization.ObjectSchema<
    serializers.OauthAccessTokenFields.Raw,
    FernIr.OauthAccessTokenFields
> = core.serialization.objectWithoutOptionalProperties({
    accessToken: core.serialization.string(),
    expiresIn: core.serialization.string().optional(),
    refreshToken: core.serialization.string().optional(),
});

export declare namespace OauthAccessTokenFields {
    interface Raw {
        accessToken: string;
        expiresIn?: string | null;
        refreshToken?: string | null;
    }
}