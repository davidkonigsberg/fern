/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedMultiUrlEnvironment from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace S3 {
    interface Options {
        environment?: core.Supplier<
            environments.SeedMultiUrlEnvironmentEnvironment | environments.SeedMultiUrlEnvironmentEnvironmentUrls
        >;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class S3 {
    constructor(protected readonly _options: S3.Options) {}

    public async getPresignedUrl(
        request: SeedMultiUrlEnvironment.GetPresignedUrlRequest,
        requestOptions?: S3.RequestOptions
    ): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                (
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedMultiUrlEnvironmentEnvironment.Production
                ).s3,
                "/s3/presigned-url"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            body: await serializers.GetPresignedUrlRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.s3.getPresignedUrl.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedMultiUrlEnvironmentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedMultiUrlEnvironmentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedMultiUrlEnvironmentTimeoutError();
            case "unknown":
                throw new errors.SeedMultiUrlEnvironmentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}