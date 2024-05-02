/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedQueryParameters from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export interface UserServiceMethods {
    getUsername(
        req: express.Request<
            never,
            SeedQueryParameters.User,
            never,
            {
                limit: number;
                id: string;
                date: string;
                deadline: Date;
                bytes: string;
                user: SeedQueryParameters.User;
                keyValue: Record<string, string>;
                optionalString?: string;
                nestedUser: SeedQueryParameters.NestedUser;
                optionalUser?: SeedQueryParameters.User;
                excludeUser: SeedQueryParameters.User;
                filter: string;
            }
        >,
        res: {
            send: (responseBody: SeedQueryParameters.User) => Promise<void>;
            cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
            locals: any;
        }
    ): void | Promise<void>;
}

export class UserService {
    private router;

    constructor(private readonly methods: UserServiceMethods, middleware: express.RequestHandler[] = []) {
        this.router = express.Router({ mergeParams: true }).use(
            express.json({
                strict: false,
            }),
            ...middleware
        );
    }

    public addMiddleware(handler: express.RequestHandler): this {
        this.router.use(handler);
        return this;
    }

    public toRouter(): express.Router {
        this.router.get("", async (req, res, next) => {
            try {
                await this.methods.getUsername(req as any, {
                    send: async (responseBody) => {
                        res.json(await serializers.User.jsonOrThrow(responseBody, { unrecognizedObjectKeys: "strip" }));
                    },
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            } catch (error) {
                console.error(error);
                if (error instanceof errors.SeedQueryParametersError) {
                    console.warn(
                        `Endpoint 'getUsername' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition."
                    );
                    await error.send(res);
                } else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        });
        return this.router;
    }
}