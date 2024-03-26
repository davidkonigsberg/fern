/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedApi from "../../../../api";
import * as core from "../../../../core";
export declare const CreateMovieRequest: core.serialization.ObjectSchema<serializers.CreateMovieRequest.Raw, SeedApi.CreateMovieRequest>;
export declare namespace CreateMovieRequest {
    interface Raw {
        movie_title: string;
        movie_rating: number;
    }
}
