/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as Fiddle from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";

export declare namespace Params {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Params {
    constructor(protected readonly _options: Params.Options) {}

    /**
     * GET with path param
     */
    public async getWithPath(
        param: string,
        requestOptions?: Params.RequestOptions
    ): Promise<core.APIResponse<string, Fiddle.endpoints.params.getWithPath.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path/${param}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.params.getWithPath.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithPath.Error._unknown(_response.error),
        };
    }

    /**
     * GET with query param
     */
    public async getWithQuery(
        request: Fiddle.endpoints.GetWithQuery,
        requestOptions?: Params.RequestOptions
    ): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithQuery.Error>> {
        const { query, number: number_ } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["query"] = query;
        _queryParams["number"] = number_.toString();
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/params"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithQuery.Error._unknown(_response.error),
        };
    }

    /**
     * GET with multiple of same query param
     */
    public async getWithAllowMultipleQuery(
        request: Fiddle.endpoints.GetWithMultipleQuery,
        requestOptions?: Params.RequestOptions
    ): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithAllowMultipleQuery.Error>> {
        const { query, numer } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (Array.isArray(query)) {
            _queryParams["query"] = query.map((item) => item);
        } else {
            _queryParams["query"] = query;
        }

        if (Array.isArray(numer)) {
            _queryParams["numer"] = numer.map((item) => item.toString());
        } else {
            _queryParams["numer"] = numer.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/params"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithAllowMultipleQuery.Error._unknown(_response.error),
        };
    }

    /**
     * GET with path and query params
     */
    public async getWithPathAndQuery(
        param: string,
        request: Fiddle.endpoints.GetWithPathAndQuery,
        requestOptions?: Params.RequestOptions
    ): Promise<core.APIResponse<void, Fiddle.endpoints.params.getWithPathAndQuery.Error>> {
        const { query } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["query"] = query;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path-query/${param}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.getWithPathAndQuery.Error._unknown(_response.error),
        };
    }

    /**
     * PUT to update with path param
     */
    public async modifyWithPath(
        param: string,
        request: string,
        requestOptions?: Params.RequestOptions
    ): Promise<core.APIResponse<string, Fiddle.endpoints.params.modifyWithPath.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/params/path/${param}`),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.params.modifyWithPath.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.params.modifyWithPath.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.params.modifyWithPath.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
