import asyncThunk from './async-thunk'
import Dispatching from '../Dispatching'

import type Request from './request'

class Authorization extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public autoLogin = async () => this.isDispatched(asyncThunk.autoLogin()) 

    public login = async (body: Request.Login) => this.isDispatched(asyncThunk.login(body))

    public registration = async (body: Request.Registration) => this.isDispatched(asyncThunk.registration(body))

    public update = async (body: Request.Update) => this.isDispatched(asyncThunk.update(body))

    public logout = async () => this.isDispatched(asyncThunk.logout())
}

export default Authorization
