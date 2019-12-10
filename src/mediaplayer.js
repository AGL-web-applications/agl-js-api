import { call as api_call, subscribe as api_subscribe } from './api';

export function playlist() {
    return api_call("mediaplayer/playlist", {});
}

export function pickTrack(trackIndex) {
    return api_call("mediaplayer/controls", {
            value: "pick-track", 
            index: trackIndex
    });
}

export function play() {
    return api_call("mediaplayer/controls", {
        value: 'play'
    });
}

export function pause() {
    return api_call("mediaplayer/controls", {
        value: 'pause'
    });
}

export function previous() {
    return api_call("mediaplayer/controls", {
        value: 'previous'
    });
}

export function next() {
    return api_call("mediaplayer/controls", {
        value: 'next'
    });
}

export function on_playlist_changes(handler) {
    return api_subscribe("mediaplayer/subscribe", {
        value: "playlist"
    }, handler);
}

export function on_metadata_changes(handler) {
    return api_subscribe("mediaplayer/subscribe", {
        value: "metadata"
    }, handler);
}