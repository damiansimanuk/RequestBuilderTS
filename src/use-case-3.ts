import { paths } from "./demo-swagger";
import { RequestBuilder } from "./request-builder";

export function RequestDemo() {
    var baseUrl = "http://127.0.0.1:8080/api"
    var requestBuilder = RequestBuilder<paths>(customFetch)
    var loginRequest = requestBuilder.entryPoint("/security/login", "post")
    let accessToken = ""

    function customFetch(url: string, method: string, body: any) {
        return fetch(baseUrl + url, {
            body,
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(e => e.json())
    }

    function login(body: typeof this.loginRequest.types.body) {
        return loginRequest
            .fetch({ body, query: { useCookies: true } })
            .then(r => { accessToken = r.accessToken ?? ""; return r; })
    }

    return {
        login,
        entryPoint: requestBuilder.entryPoint
    }
}

var requestDemo = RequestDemo()
// var result = await requestDemo.entryPoint("/security/login", "post").fetch({
//     query: {},
//     body: { email: "email@example.com", password: "Pa$$word123" }
// })

var result2 = await requestDemo.login({ email: "email@example.com", password: "Pa$$word123" })
var accessTowken = result2.accessToken

