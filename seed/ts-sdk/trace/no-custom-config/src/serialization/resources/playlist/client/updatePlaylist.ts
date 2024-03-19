/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
import { UpdatePlaylistRequest } from "../types/UpdatePlaylistRequest";
import { Playlist } from "../types/Playlist";

export const Request: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Request.Raw,
    SeedTrace.UpdatePlaylistRequest | undefined
> = UpdatePlaylistRequest.optional();

export declare namespace Request {
    type Raw = UpdatePlaylistRequest.Raw | null | undefined;
}

export const Response: core.serialization.Schema<
    serializers.playlist.updatePlaylist.Response.Raw,
    SeedTrace.Playlist | undefined
> = Playlist.optional();

export declare namespace Response {
    type Raw = Playlist.Raw | null | undefined;
}
