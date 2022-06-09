import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Comment extends HandleFetch {
    public static Create = async (body: Request.Create) => this.CreateJsonRequest<Response.Create>(PATH.CREATE, Options.Create(body))
    
    public static Update = async (body: Request.Update) => this.CreateJsonRequest<Response.Update>(PATH.UPDATE, Options.Update(body))
    
    public static Delete = async (link: Request.Delete) => this.CreateJsonRequest<Response.Delete>(PATH.DELETE + link, Options.Delete())

    public static Like = async (body: Request.Like) => this.CreateJsonRequest<Response.Like>(PATH.LIKE + body, Options.Like())

    public static Dislike = async (body: Request.Dislike) => this.CreateJsonRequest<Response.Dislike>(PATH.DISLIKE + body, Options.Dislike())
}