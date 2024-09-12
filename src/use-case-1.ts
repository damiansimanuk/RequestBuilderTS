import { paths } from "./demo-swagger";
import { RequestBuilder } from "./request-builder";

function caller(url: string, method: string, body: any) {
    return fetch("http://127.0.0.1:8080/api" + url, {
        body,
        method,
        credentials: "include",
    }).then(e => e.json())
}

var req1_1 = await RequestBuilder<paths>()
    .entryPoint("/security/confirmEmail", "get")
    .call(caller, { query: { code: "", userId: "1" } });

var req1_2 = RequestBuilder<paths>(caller)
    .entryPoint("/security/confirmEmail", "get")
    .fetch({ query: { code: "" } });

var req1_3 = RequestBuilder<paths>()
    .entryPoint("/security/login", "post")
    .fetch({
        query: { useCookies: true },
        body: { email: "" }
    })

var requestBuilder = RequestBuilder<paths>(caller)

var req2_3 = requestBuilder.entryPoint("/security/login", "post").fetch({
    query: { useCookies: true },
    body: { email: "" }
})

requestBuilder
    .entryPoint("/security/Logout", "post")
    .fetch({
        query: { returnUrl: "true" },
    })

var r = requestBuilder
    .entryPoint("/security/register", "post")
    .fetch({
        body: { email: "", password: "" }
    })

requestBuilder.entryPoint("/security/login", "post")

var result = await requestBuilder.entryPoint("/security/login", "post")
    .fetch({
        query: { useCookies: true },
        body: {
            email: "email@example.com",
            password: "Pa$$word123",
        }
    })

var resultRefresh = await requestBuilder.entryPoint("/security/refresh", "post")
    .fetch({ body: { refreshToken: result.refreshToken } })


var res = requestBuilder.entryPoint("/security/login", "post").fetch({
    query: { useCookies: true },
    body: { email: "", password: "" },
})


var reqInfo = requestBuilder.entryPoint("/security/manage/info", "post")

type infoTypes = typeof reqInfo.types


