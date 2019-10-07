import { call as api_call, subscribe as api_subscribe } from './api';

export function list_controls() {
    return api_call("audiomixer/list_controls", {});
}

export function set_volume(control, value) {
    return api_call("audiomixer/volume", {
                control: control,
                value: value
            });
}

export function on_volume_changed(handler) {
    return api_subscribe("audiomixer/subscribe", "volume_changed", handler);
}

export function on_controls_changed(handler) {
    return api_subscribe("audiomixer/subscribe", "controls_changed", handler);
}