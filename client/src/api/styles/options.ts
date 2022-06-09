import Options from '../Options'
import Request from './request'

export default class Styles extends Options {
    public static Get = () => {
        return this.GET()
    }

    public static UpdateGeneral = (body: Request.UpdateGeneral) => {
        return this.PATCH(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }
    
    public static UpdateDark = (body: Request.UpdateDark) => {
        return this.PATCH(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }
    
    public static UpdateLight = (body: Request.UpdateLight) => {
        return this.PATCH(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }
}