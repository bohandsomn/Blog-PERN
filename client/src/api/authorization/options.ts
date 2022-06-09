import Options from '../Options'
import type Request from './request'

export default class Authorization extends Options {
    public static AutoLogin = () => {
        return this.GET()
    }

    public static Refresh = () => {
        return this.GET()
    }
    
    public static Registration = (body: Request.Registration) => {
        return this.POST(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static Login = (body: Request.Login) => {
        return this.POST(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static Logout = (body: Request.Logout) => {
        return this.POST(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static Update = (body: Request.Update) => {
        return this.PUT(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static Activation = () => {
        return this.GET()
    }
}