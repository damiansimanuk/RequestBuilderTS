import { paths } from "./demo-swagger";
import { RequestBuilder } from "./request-builder";


class RequestDemo {
    private baseUrl = "http://127.0.0.1:8080/api"
    private requestBuilder = RequestBuilder<paths>(this.fetch)
    private loginRequest = this.requestBuilder.entryPoint("/security/login", "post")

    private fetch(url: string, method: string, body: any) {
        return fetch(this.baseUrl + url, {
            body,
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'ASDF1234'
            }
        }).then(e => e.json())
    }

    login(body: typeof this.loginRequest.types.body) {
        return this.loginRequest.fetch({ body, query: { useCookies: true } })
    }
}

var requestDemo = new RequestDemo()
var result = await requestDemo.login({ email: "email@example.com", password: "Pa$$word123" })
var accessToken = result.accessToken

