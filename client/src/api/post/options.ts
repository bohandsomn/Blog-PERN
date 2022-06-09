import Options from '../Options'

import type Request from './request'

export default class Post extends Options {
    public static Create = (body: Request.Create) => {
        return this.POST(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static Update = (body: Request.Update) => {
        return this.PUT(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static GetOne = () => {
        return this.GET()
    }

    public static GetMany = () => {
        return this.GET()
    }

    public static Delete = () => {
        return this.DELETE()
    }

    public static Like = () => {
        return this.PATCH()
    }

    public static Dislike = () => {
        return this.PATCH()
    }
}
