import HandleFetch from './HandleFetch'
import Token from '../services/Token'
import Response from './authorization/response'
import PATH from './authorization/path'
import Options from './authorization/options'

import type { CreateResponseUtility } from '../types/CreateResponseUtility'
import type { FulfiledTemplate, RejectdTemplate } from '../types/Template'
const Refresh = async () => HandleFetch.CreateJsonRequest<Response.Refresh>(PATH.REFRESH, Options.Refresh())

export default class Initialize {
    private static isRefreshed: boolean = false

    private static refresh = async () => {
        this.isRefreshed = true

        const refreshResponse = await Refresh()
        if (refreshResponse.data === null) {
            Token.delete()
            return 
        }

        const { accessToken } = refreshResponse.data

        Token.save(accessToken)
    }

    public static json = async <T extends CreateResponseUtility<T['data']>>(response: Response) => {
        const promise: Promise<T> = await response.json()
        const { data, message } = await promise 
        const status = response.status.toString()[0] as '1' | '2' | '3' | '4' | '5'
        
        if (response.ok) {
            this.isRefreshed = false

            return {
                data,
                serverMessage: {
                    message,
                    status
                }
            } as FulfiledTemplate<T['data']>
        }

        if (this.isRefreshed || response.status !== 401) {
            this.isRefreshed = false
            
            return {
                data,
                serverMessage: {
                    message,
                    status
                }
            } as RejectdTemplate
        }

        await this.refresh()

        if (Token.get() !== null) {
            throw new Error() // Go to .catch() and re-request the original request 
        }

        return {
            data,
            serverMessage: {
                message,
                status
            }
        } as RejectdTemplate
    }
}