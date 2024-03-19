/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as SeedTrace from "../../../../../../../../api";
import * as core from "../../../../../../../../core";
import { TestCaseMetadata } from "./TestCaseMetadata";
import { TestCaseImplementationReference } from "./TestCaseImplementationReference";
import { ParameterId } from "./ParameterId";
import { TestCaseExpects } from "./TestCaseExpects";

export const TestCaseV2: core.serialization.ObjectSchema<serializers.v2.v3.TestCaseV2.Raw, SeedTrace.v2.v3.TestCaseV2> =
    core.serialization.object({
        metadata: TestCaseMetadata,
        implementation: TestCaseImplementationReference,
        arguments: core.serialization.record(
            ParameterId,
            core.serialization.lazy(async () => (await import("../../../../../../..")).VariableValue)
        ),
        expects: TestCaseExpects.optional(),
    });

export declare namespace TestCaseV2 {
    interface Raw {
        metadata: TestCaseMetadata.Raw;
        implementation: TestCaseImplementationReference.Raw;
        arguments: Record<ParameterId.Raw, serializers.VariableValue.Raw>;
        expects?: TestCaseExpects.Raw | null;
    }
}
