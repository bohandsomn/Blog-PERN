import type User from "../types/entities/user"

type Input = {
    id: User['id']
    name: User['name']
    surname: User['surname']
    email: User['email']
    login: User['login']
    birthday: User['birthday']
    privacy: User['privacy']
    isSubscriber: boolean
}

export default class PublicUserDTO {
    public readonly id: Input['id']
    public readonly name: Input['name']
    public readonly surname: Input['surname']
    public readonly email: Input['email']
    public readonly login: Input['login']
    public readonly birthday: number | null
    public readonly privacy: Input['privacy']
    public readonly isSubscriber: Input['isSubscriber']

    constructor({ id, name, surname, email, login, birthday, privacy, isSubscriber }: Input) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.login = login
        this.birthday = birthday === null ? null : parseInt(birthday)
        this.privacy = privacy
        this.isSubscriber = isSubscriber
    }
}
