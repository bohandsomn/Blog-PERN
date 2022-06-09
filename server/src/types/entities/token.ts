import type { IToken } from '../../database/models/Token'

export type Tokens = {
    accessToken: string
    refreshToken: string
}

export default IToken
