class Authorization {
    protected readonly AUTHORIZATION_ROUTE = '/authorization'

    public readonly REGISTRATION = this.AUTHORIZATION_ROUTE + '/registration'
    public readonly LOGIN = this.AUTHORIZATION_ROUTE + '/login'
    public readonly UPDATE = this.AUTHORIZATION_ROUTE + '/update'
    public readonly AUTO_LOGIN = this.AUTHORIZATION_ROUTE + '/auto-login'
    public readonly LOGOUT = this.AUTHORIZATION_ROUTE + '/logout'
    public readonly ACTIVATION = this.AUTHORIZATION_ROUTE + '/activation/:link'
    public readonly REFRESH = this.AUTHORIZATION_ROUTE + '/refresh'
}

const AUTHORIZATION = new Authorization()

export default AUTHORIZATION as {
    readonly REGISTRATION: 'http://domain-name:port/api/authorization/registration'
    readonly LOGIN: 'http://domain-name:port/api/authorization/login'
    readonly UPDATE: 'http://domain-name:port/api/authorization/update'
    readonly AUTO_LOGIN: 'http://domain-name:port/api/authorization/auto-login'
    readonly LOGOUT: 'http://domain-name:port/api/authorization/logout'
    readonly ACTIVATION: 'http://domain-name:port/api/authorization/activation/:link'
    readonly REFRESH: 'http://domain-name:port/api/authorization/refresh'
}