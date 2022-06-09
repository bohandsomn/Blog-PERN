import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './respone'

export default class User extends HandleFetch {
    public static GetSubscribers = async () => this.CreateJsonRequest<Response.GetSubscribers>(PATH.GET_SUBSCRIBERS, Options.GetSubscribers())
    
    public static GetSubscriptions = async () => this.CreateJsonRequest<Response.GetSubscriptions>(PATH.GET_SUBSCRIPTIONS, Options.GetSubscriptions())
    
    public static GetPreview = async (body: Request.GetPreview) => this.CreateJsonRequest<Response.GetPreview>(PATH.GET_PREVIEW + PATH.query(body), Options.GetPreview())
    
    public static GetOne = async (body: Request.GetOne) => this.CreateJsonRequest<Response.GetOne>(PATH.GET_ONE + body, Options.GetOne())
    
    public static Subscribe = async (body: Request.SubscribeParams) => this.CreateJsonRequest<Response.Subscribe>(PATH.SUBSCRIBE + body, Options.Subscribe())
    
    public static Unsubscribe = async (body: Request.UnsubscribeParams) => this.CreateJsonRequest<Response.Unsubscribe>(PATH.UNSUBSCRIBE + body, Options.Unsubscribe())
}
