import { paths } from "./demo-swagger";
import { RequestBuilder } from "./request-builder";

function caller(url: string, method: string, body: any) {
    return fetch(url, {
        body,
        method,
        credentials: "include",
        headers: {
            "Authorization": "Bearer 12312341234123412341234",
        },
        mode: 'no-cors'
    }).then(e => e.json())
}

var req1_1 = RequestBuilder<paths>()
    .Endpoint("/security/confirmEmail", "get")
    .Call(caller, { query: { code: "", userId: "1" } });

var req1_2 = RequestBuilder<paths>(caller)
    .Endpoint("/security/confirmEmail", "get")
    .Fetch({ query: { code: "" } });

var req1_3 = RequestBuilder<paths>()
    .Endpoint("/security/login", "post")
    .Fetch({
        query: { useCookies: true },
        body: { email: "" }
    })


var requestBuilder = RequestBuilder<paths>(caller)

var req2_3 = requestBuilder.Endpoint("/security/login", "post").Fetch({
    query: { useCookies: true },
    body: { email: "" }
})

requestBuilder
    .Endpoint("/security/Logout", "post")
    .Fetch({
        query: { returnUrl: "true" },
    })

var r = requestBuilder
    .Endpoint("/security/register", "post")
    .Fetch({
        body: { email: "", password: "" }
    })

requestBuilder.Endpoint("/security/login", "post")

// var requestBuilderDelay = RequestBuilder<paths_delay>(caller)

// var delaysQuery = requestBuilderDelay.Endpoint("/api/v1/Delay/delay", "get")

// delaysQuery.Call((u, m, b) => fetch(u, { method: m, body: b }).then(e => e.json()), { query: { lineId: 1 } })



// function GetDelaysQuery(query: typeof delaysQuery.types.query) {
//     return delaysQuery.Fetch({ query })
// }

// function GetDelaysQuery2(query: paths_delay["/api/v1/Delay/delay"]["get"]["parameters"]["query"]) {
//     return RequestBuilder<paths_delay>()
//         .Endpoint("/api/v1/Delay/delay", "get")
//         .Fetch({ query })
// }

// requestBuilderDelay.Endpoint("/api/v1/Delay/line/{lineId}/cause", "post").Fetch({
//     path: { lineId: 1 },
//     body: {
//         parentCauseId: 1,
//         items: [{
//             delayTypeId: "MicroInterruption",
//             name: "2"
//         }],
//     }
// });

// var res = GetDelaysQuery({})



