/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../..";

export type CustomFiles = SeedTrace.v2.CustomFiles.Basic | SeedTrace.v2.CustomFiles.Custom;

export declare namespace CustomFiles {
    interface Basic extends SeedTrace.v2.BasicCustomFiles {
        type: "basic";
    }

    interface Custom {
        type: "custom";
        value: Record<SeedTrace.Language, SeedTrace.v2.Files | undefined>;
    }
}