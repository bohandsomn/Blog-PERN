import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Photo extends HandleFetch {
    public static GetOne = async (body: Request.GetOne) => this.CreateJsonRequest<Response.GetOne>(PATH.GET_ONE + PATH.query(body), Options.GetOne())
    
    public static Set = async (body: Request.Set) => this.CreateJsonRequest<Response.Set>(PATH.SET, Options.Set(body))
    
    public static Update = async (body: Request.Update) => this.CreateJsonRequest<Response.Update>(PATH.UPDATE, Options.Update(body))
    
    public static Delete = async (body: Request.Update) => this.CreateJsonRequest<Response.Delete>(PATH.DELETE, Options.Delete(body))
}
