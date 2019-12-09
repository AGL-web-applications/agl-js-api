import { call as api_call, subscribe as api_subscribe } from './api';

export function list() {
    return api_call("low-can/list", {});
}

export function get(event) {
    return api_call("low-can/get", {
        event: event
    });
}