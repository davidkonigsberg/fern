/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as SeedTrace from "../../../../../../../index";
import urlJoin from "url-join";

export declare namespace Problem {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Problem {
    constructor(protected readonly _options: Problem.Options = {}) {}

    /**
     * Returns lightweight versions of all problems
     *
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedTrace.v2.v3.problem.getLightweightProblems()
     */
    public async getLightweightProblems(
        requestOptions?: Problem.RequestOptions
    ): Promise<
        core.APIResponse<
            SeedTrace.v2.v3.LightweightProblemInfoV2[],
            SeedTrace.v2.v3.problem.getLightweightProblems.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problems-v2/lightweight-problem-info"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body as SeedTrace.v2.v3.LightweightProblemInfoV2[],
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getLightweightProblems.Error._unknown(_response.error),
        };
    }

    /**
     * Returns latest versions of all problems
     *
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedTrace.v2.v3.problem.getProblems()
     */
    public async getProblems(
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2[], SeedTrace.v2.v3.problem.getProblems.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problems-v2/problem-info"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body as SeedTrace.v2.v3.ProblemInfoV2[],
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getProblems.Error._unknown(_response.error),
        };
    }

    /**
     * Returns latest version of a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedTrace.v2.v3.problem.getLatestProblem("string")
     */
    public async getLatestProblem(
        problemId: SeedTrace.ProblemId,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2, SeedTrace.v2.v3.problem.getLatestProblem.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problems-v2/problem-info/${encodeURIComponent(problemId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body as SeedTrace.v2.v3.ProblemInfoV2,
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getLatestProblem.Error._unknown(_response.error),
        };
    }

    /**
     * Returns requested version of a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {number} problemVersion
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedTrace.v2.v3.problem.getProblemVersion("string", 1)
     */
    public async getProblemVersion(
        problemId: SeedTrace.ProblemId,
        problemVersion: number,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.v2.v3.ProblemInfoV2, SeedTrace.v2.v3.problem.getProblemVersion.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problems-v2/problem-info/${encodeURIComponent(problemId)}/version/${encodeURIComponent(
                    problemVersion
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: _response.body as SeedTrace.v2.v3.ProblemInfoV2,
            };
        }

        return {
            ok: false,
            error: SeedTrace.v2.v3.problem.getProblemVersion.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
