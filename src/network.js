import { call as api_call, subscribe as api_subscribe } from './api';

export function technologies() {
    return api_call("network-manager/technologies", {});
}

export function services() {
    return api_call("network-manager/services", {});
}

export function scan_services(oOptions) {
    return api_call("network-manager/scan_services", oOptions);
}

export function on_global_state(handler) {
    return api_subscribe("network-manager/subscribe", {
        value: "global_state"
    }, handler);
}