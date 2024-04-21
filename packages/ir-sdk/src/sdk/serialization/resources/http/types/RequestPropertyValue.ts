/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const RequestPropertyValue: core.serialization.Schema<
    serializers.RequestPropertyValue.Raw,
    FernIr.RequestPropertyValue
> = core.serialization
    .union("type", {
        query: core.serialization.lazyObject(async () => (await import("../../..")).QueryParameter),
        body: core.serialization.lazyObject(async () => (await import("../../..")).ObjectProperty),
    })
    .transform<FernIr.RequestPropertyValue>({
        transform: (value) => {
            switch (value.type) {
                case "query":
                    return FernIr.RequestPropertyValue.query(value);
                case "body":
                    return FernIr.RequestPropertyValue.body(value);
                default:
                    return value as FernIr.RequestPropertyValue;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace RequestPropertyValue {
    type Raw = RequestPropertyValue.Query | RequestPropertyValue.Body;

    interface Query extends serializers.QueryParameter.Raw {
        type: "query";
    }

    interface Body extends serializers.ObjectProperty.Raw {
        type: "body";
    }
}