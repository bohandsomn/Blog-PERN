import Path, { routsInput } from '../Path'

class Authorization extends Path {
    protected readonly AUTHORIZATION_ROUTE = this.SERVER_ROUTE + '/authorization'

    public readonly REGISTRATION = this.AUTHORIZATION_ROUTE + '/registration'
    public readonly LOGIN = this.AUTHORIZATION_ROUTE + '/login'
    public readonly UPDATE = this.AUTHORIZATION_ROUTE + '/update'
    public readonly AUTO_LOGIN = this.AUTHORIZATION_ROUTE + '/auto-login'
    public readonly LOGOUT = this.AUTHORIZATION_ROUTE + '/logout'
    public readonly ACTIVATION = this.AUTHORIZATION_ROUTE + '/activation/'
    public readonly REFRESH = this.AUTHORIZATION_ROUTE + '/refresh'
}

const PATH = new Authorization(routsInput)

export default PATH
