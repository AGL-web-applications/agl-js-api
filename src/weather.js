import { call as api_call, subscribe as api_subscribe } from './api';

export function current_weather() {
    return api_call("weather/current_weather", {});
}

export function api_key(apiKey) {
    return api_call("weather/api_key", {
                value: apiKey
            });
}