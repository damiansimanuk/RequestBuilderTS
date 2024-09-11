type RequiredProp<T> = {
    [P in keyof T as T[P] extends never ? never : P]: T[P];
};

export function RequestBuilder<Paths>(caller: ((url: string, method: string, body: any) => Promise<any>) | null = null) {

    function Endpoint<
        Url extends keyof Paths,
        Methods extends keyof Omit<Pick<Paths[Url], keyof RequiredProp<Paths[Url]>>, "parameters">,
        Method extends Methods
    >(url: Url, method: Method) {
        type P = Required<Paths[Url][Method]>
        type Param = Required<Extract<P, { parameters }>['parameters']>
        type Resp = Extract<P, { responses }>['responses']
        type Result = { [P in keyof Resp as keyof Resp[P]]: Resp[P]['content']['application/json']; }['content']
        type Path = Extract<Param, { path }>['path']
        type Query = Extract<Param, { query }>['query']
        type Body = Extract<Required<P>, { requestBody: { content: { 'application/json' } } }>['requestBody']['content']['application/json']
        type O = { path: Path; query: Query; body: Body; }
        type Option = Pick<O, keyof RequiredProp<O>>

        function Fetch(options: Option) {
            return Call(caller, options)
        }

        async function Call(caller: ((url: string, method: string, body: any) => Promise<any>) | null, options: Option) {
            let path = (options as any).path as Path;
            let query = (options as any).query as Query;
            let body = (options as any).body as Body;

            if (caller == null) {
                throw new Error("Invalid caller method")
            }

            let parsedUrl = `${url as string}`;
            if (path) {
                Object.keys(path || {}).forEach((p) => {
                    parsedUrl = parsedUrl.replace(`{${p}}`, `${path[p]}`);
                });
            }
            const queryParams = new URLSearchParams(query).toString();
            const parsedQuery =
                queryParams.length > 0 && !queryParams.startsWith('null')
                    ? '?' + queryParams
                    : '';
            parsedUrl = parsedUrl + parsedQuery;


            try {
                var res = await caller(parsedUrl, method, body)
                return res as Result
            }
            catch (e) {
                throw e
            }
        }

        return {
            Call,
            Fetch,
            method: method as string,
            url: url as string,
            types: {
                result: {} as Result,
                path: {} as Path,
                query: {} as Query,
                body: {} as Body,
            }
        };
    }

    return { Endpoint };
}
