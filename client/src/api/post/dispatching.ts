import Dispatching from '../Dispatching'

import asyncThunk from './async-thunk'

import type Request from './request'

class Post extends Dispatching {
    static get dispatch() {
        return new this()
    }

    public getManyMainPage = async (query: Request.GetManyQuery) => this.isDispatched(asyncThunk.getManyMainPage(query))
    
    public addManyMainPage = async (query: Request.GetManyQuery) => this.isDispatched(asyncThunk.addManyMainPage(query))

    public getManyAccountPage = async (query: Request.GetManyQuery) => this.isDispatched(asyncThunk.getManyAccountPage(query))

    public create = async (body: Request.Create) => this.isDispatched(asyncThunk.create(body))

    public delete = async (body: Request.DeleteParams) => this.isDispatched(asyncThunk.delete(body))

    public update = async (body: Request.Update) => this.isDispatched(asyncThunk.update(body))

    public like = async (body: Request.LikeParams) => this.isDispatched(asyncThunk.like(body))

    public dislike = async (body: Request.DislikeParams) => this.isDispatched(asyncThunk.dislike(body))
}

export default Post
