import asyncThunk from './async-thunk'
import Dispatching from '../Dispatching'

import type Request from './request'

class Styles extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public get = async () => this.isDispatched(asyncThunk.get()) 
    
    public updateGeneral = async (body: Request.UpdateGeneral) => this.isDispatched(asyncThunk.updateGeneral(body)) 
    
    public updateDark = async (body: Request.UpdateDark) => this.isDispatched(asyncThunk.updateDark(body)) 
    
    public updateLight = async (body: Request.UpdateLight) => this.isDispatched(asyncThunk.updateLight(body)) 
}

export default Styles
