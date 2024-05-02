/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const MultipartRequestProperty: core.serialization.ObjectSchema<
    serializers.MultipartRequestProperty.Raw,
    FernOpenapiIr.MultipartRequestProperty
> = core.serialization
    .objectWithoutOptionalProperties({
        key: core.serialization.string(),
        schema: core.serialization.lazy(async () => (await import("../../..")).MultipartSchema),
        contentType: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace MultipartRequestProperty {
    interface Raw extends serializers.WithDescription.Raw {
        key: string;
        schema: serializers.MultipartSchema.Raw;
        contentType?: string | null;
    }
}
