import type User from "../types/entities/user"

type Input = {
    id: User['id']
    name: User['name']
    surname: User['surname']
    birthday: User['birthday']
    privacy: User['privacy']
    isSubscriber: boolean
}

export default class PrivateUserDTO {
    public readonly id: Input['id']
    public readonly name: Input['name']
    public readonly surname: Input['surname']
    public readonly birthday: number | null
    public readonly privacy: Input['privacy']
    public readonly isSubscriber: Input['isSubscriber']

    constructor({ id, name, surname, birthday, privacy, isSubscriber }: Input) {
        this.id = id
        this.name = name
        this.surname = surname
        this.birthday = birthday === null ? null : parseInt(birthday)
        this.privacy = privacy
        this.isSubscriber = isSubscriber
    }
}
