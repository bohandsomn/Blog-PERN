import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Styles extends HandleFetch {
    public static Get = async () => this.CreateJsonRequest<Response.Get>(PATH.GET, Options.Get())
    
    public static UpdateGeneral = async (body: Request.UpdateGeneral) => this.CreateJsonRequest<Response.UpdateGeneral>(PATH.UPDATE_GENERAL, Options.UpdateGeneral(body))
    
    public static UpdateDark = async (body: Request.UpdateDark) => this.CreateJsonRequest<Response.UpdateDark>(PATH.UPDATE_DARK, Options.UpdateDark(body))
    
    public static UpdateLight = async (body: Request.UpdateLight) => this.CreateJsonRequest<Response.UpdateLight>(PATH.UPDATE_LIGHT, Options.UpdateLight(body))
}
