import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Post extends HandleFetch {
    public static Create = async (body: Request.Create) => this.CreateJsonRequest<Response.Create>(PATH.CREATE, Options.Create(body))
    
    public static Update = async (body: Request.Update) => this.CreateJsonRequest<Response.Update>(PATH.UPDATE, Options.Update(body))
    
    public static GetOne = async (link: Request.GetOneParams) => this.CreateJsonRequest<Response.GetOne>(PATH.GET_ONE + link, Options.GetOne())
    
    public static GetMany = async (query: Request.GetManyQuery) => this.CreateJsonRequest<Response.GetMany>(PATH.GET_MANY + PATH.query(query), Options.GetMany())
    
    public static Delete = async (link: Request.DeleteParams) => this.CreateJsonRequest<Response.Delete>(PATH.DELETE + link, Options.Delete())

    public static Like = async (body: Request.LikeParams) => this.CreateJsonRequest<Response.Like>(PATH.LIKE + body, Options.Like())
    
    public static Dislike = async (body: Request.LikeParams) => this.CreateJsonRequest<Response.Dislike>(PATH.DISLIKE + body, Options.Dislike())
}
