import Options from './Options'
import Initialize from './Initialize'
import Token from '../services/Token'

import type { CreateResponseUtility } from '../types/CreateResponseUtility'
import type Template from '../types/Template'

export default class HandleFetch {
    public static CreateJsonRequest = async <T extends CreateResponseUtility<T['data']>>(input: RequestInfo, options: Options): Promise<Template<T["data"]>> => {
        return fetch(input, options)
            .then((response) => Initialize.json<T>(response))
            .catch(() => {
                const accessToken = Token.get()

                if (accessToken === null) {
                    throw new Error()
                }

                options.headers.authorization = `Bearer ${accessToken}`

                return this.CreateJsonRequest(input, options)
            })
    }

    protected static CreateRedirectRequest = async (input: RequestInfo, options: Options) => {
        fetch(input, options)
    }
}
