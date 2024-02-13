/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";
import * as SeedApi from "../../../../..";
import * as serializers from "../../../../../../serialization";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    public async endpoint(requestOptions?: Service.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/service"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedApiTimeoutError();
            case "unknown":
                throw new errors.SeedApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link SeedApi.folder.NotFoundError}
     */
    public async unknownRequest(request?: unknown, requestOptions?: Service.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/service"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new SeedApi.folder.NotFoundError(
                        await serializers.folder.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SeedApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedApiTimeoutError();
            case "unknown":
                throw new errors.SeedApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}