import Options from '../Options'
import type Request from './request'

export default class Photo extends Options {
    public static GetOne = () => {
        return this.GET()
    }

    public static Set = (body: Request.Set) => {
        return this.POST(body)
    }

    public static Update = (body: Request.Update) => {
        return this.PUT(body)
    }

    public static Delete = (_: Request.Delete = {}) => {
        return this.DELETE()
    }
}