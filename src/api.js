var afb;
var host = document.location.hostname;
var port = document.location.port;
var args = new URLSearchParams(document.location.search.substring(1));
var token = args.get("x-afb-token") || args.get("token") || "HELLO";

export function call(url, params) {
    return new Promise(function(resolve, reject) {
        var ws = new afb.ws(function() {
            ws.call(url, params).then(
                function(obj) {
                    resolve(obj.response);
                },
                function(obj) {
                    reject(obj);
                }
            );
        },
        function() {
            reject("ws aborted");
        });
    })
}

export function init() {
    afb = new AFB({
        host: "192.168.1.102:31022",
        token: token
    });
}