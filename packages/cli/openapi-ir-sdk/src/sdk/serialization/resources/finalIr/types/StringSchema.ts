/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const StringSchema: core.serialization.ObjectSchema<serializers.StringSchema.Raw, FernOpenapiIr.StringSchema> =
    core.serialization.objectWithoutOptionalProperties({
        default: core.serialization.string().optional(),
        pattern: core.serialization.string().optional(),
        format: core.serialization.string().optional(),
        minLength: core.serialization.number().optional(),
        maxLength: core.serialization.number().optional(),
    });

export declare namespace StringSchema {
    interface Raw {
        default?: string | null;
        pattern?: string | null;
        format?: string | null;
        minLength?: number | null;
        maxLength?: number | null;
    }
}
