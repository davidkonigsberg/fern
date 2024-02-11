/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const TestCaseWithExpectedResult: core.serialization.ObjectSchema<serializers.TestCaseWithExpectedResult.Raw, SeedTrace.TestCaseWithExpectedResult>;
export declare namespace TestCaseWithExpectedResult {
    interface Raw {
        testCase: serializers.TestCase.Raw;
        expectedResult: serializers.VariableValue.Raw;
    }
}