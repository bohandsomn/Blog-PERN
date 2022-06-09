import HandleFetch from '../HandleFetch'
import Options from './options'
import PATH from './path'

import type Request from './request'
import type Response from './response'

export default class Chat extends HandleFetch {
    public static Create = async (body: Request.Create) => this.CreateJsonRequest<Response.Create>(PATH.CREATE, Options.Create(body))

    public static GetOne = async (body: Request.GetOne) => this.CreateJsonRequest<Response.GetOne>(PATH.GET_ONE + body, Options.GetOne())

    public static GetMany = async (body: Request.GetMany) => this.CreateJsonRequest<Response.GetMany>(PATH.GET_MANY + body, Options.GetMany())
    
    public static GetManyByName = async (body: Request.GetManyByName) => this.CreateJsonRequest<Response.GetManyByName>(PATH.GET_MANY_BY_NAME + body, Options.GetManyByName())

    public static Update = async (body: Request.Update) => this.CreateJsonRequest<Response.Update>(PATH.UPDATE, Options.Update(body))
    
    public static UpdateLastMessage = async (body: Request.UpdateLastMessage) => this.CreateJsonRequest<Response.UpdateLastMessage>(PATH.UPDATE_LAST_MESSAGE, Options.UpdateLastMessage(body))

    public static SetPhoto = async (input: { chatId: Request.SetPhoto, formData: {} }) => this.CreateJsonRequest<Response.SetPhoto>(PATH.SET_PHOTO + input.chatId, Options.SetPhoto(input.formData))

    public static Delete = async (link: Request.Delete) => this.CreateJsonRequest<Response.Delete>(PATH.DELETE + link, Options.Delete())
}