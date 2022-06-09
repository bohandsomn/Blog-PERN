import type User from "../types/entities/user"
import type Activation from "../types/entities/activation"

export default class UserDTO {
    public readonly id: User['id']
    public readonly name: User['name']
    public readonly surname: User['surname']
    public readonly email: User['email']
    public readonly login: User['login']
    public readonly isActivation: Activation['is_activation']
    public readonly birthday: number | null
    public readonly privacy: User['privacy']

    constructor({ id, name, surname, email, login, isActivation, birthday, privacy }: UserDTO) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.login = login
        this.isActivation = isActivation
        this.birthday = birthday
        this.privacy = privacy
    }
}
