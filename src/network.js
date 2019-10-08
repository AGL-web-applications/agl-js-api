import { call as api_call, subscribe as api_subscribe } from './api';

export function technologies() {
    return api_call("network-manager/technologies", {});
}

export function on_global_state(handler) {
    return api_subscribe("network-manager/subscribe", {
        value: "global_state"
    }, handler);
}