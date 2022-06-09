import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Authorization extends HandleFetch {
    public static Registration = async (body: Request.Registration) => this.CreateJsonRequest<Response.Registration>(PATH.REGISTRATION, Options.Registration(body))
    
    public static Login = async (body: Request.Login) => this.CreateJsonRequest<Response.Login>(PATH.LOGIN, Options.Login(body))
    
    public static Logout = async () => this.CreateJsonRequest<Response.Logout>(PATH.LOGOUT, Options.Logout({}))
    
    public static Update = async (body: Request.Update) => this.CreateJsonRequest<Response.Update>(PATH.UPDATE, Options.Update(body))
    
    public static AutoLogin = async () => this.CreateJsonRequest<Response.AutoLogin>(PATH.AUTO_LOGIN, Options.AutoLogin())

    public static Activation = async (body: Request.Activation) => this.CreateRedirectRequest(PATH.ACTIVATION + body, Options.Activation())

    public static Refresh = async () => HandleFetch.CreateJsonRequest<Response.Refresh>(PATH.REFRESH, Options.Refresh())
}
