import type User from '../../../../types/entities/user'
import type Token from '../../../../types/entities/token'
import type { Tokens } from '../../../../types/entities/token'
import type UserDTO from '../../../../DTOs/user'

export namespace ServiceType {
    export type GenerateTokens = (payload: UserDTO) => Tokens
    export type SaveToken = (userId: User['id'], token: string) => Promise<Token>
    export type Remove = (token: string) => Promise<void>
    export type Verify = (token: string, type: 'ACCESS' | 'REFRESH') => UserDTO
    export type FindByToken = (token: string) => Promise<Token>
}
