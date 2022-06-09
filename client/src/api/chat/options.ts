import Options from '../Options'

import type Request from './request'

export default class Chat extends Options {
    public static Create = (body: Request.Create) => {
        return this.POST(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static GetOne = () => {
        return this.GET()
    }

    public static GetMany = () => {
        return this.GET()
    }

    public static GetManyByName = () => {
        return this.GET()
    }

    public static Update = (body: Request.Update) => {
        return this.PUT(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static UpdateLastMessage = (body: Request.UpdateLastMessage) => {
        return this.PATCH(JSON.stringify(body), { 'Content-Type': 'application/json' })
    }

    public static SetPhoto = (event: {}) => {
        return this.PATCH(event)
    }

    public static Delete = () => {
        return this.DELETE()
    }
}
