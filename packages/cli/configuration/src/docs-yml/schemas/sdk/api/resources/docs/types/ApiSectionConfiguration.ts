/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../..";

export interface ApiSectionConfiguration {
    api: string;
    /** Name of API that we are referencing */
    apiName?: string;
    audiences?: string[];
    /** Defaults to false */
    displayErrors?: boolean;
    snippets?: FernDocsConfig.SnippetsConfiguration;
}
