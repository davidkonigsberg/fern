/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ClientCredentialsOAuthScheme: core.serialization.ObjectSchema<
    serializers.ClientCredentialsOAuthScheme.Raw,
    FernIr.ClientCredentialsOAuthScheme
> = core.serialization
    .objectWithoutOptionalProperties({
        tokenEndpoint: core.serialization.string(),
        refreshEndpoint: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseOAuthScheme));

export declare namespace ClientCredentialsOAuthScheme {
    interface Raw extends serializers.BaseOAuthScheme.Raw {
        tokenEndpoint: string;
        refreshEndpoint?: string | null;
    }
}