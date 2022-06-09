import Path, { routsInput } from '../Path'

class Photo extends Path {
    protected readonly PHOTO_ROUTE = this.SERVER_ROUTE + '/photo'

    public readonly SET = this.PHOTO_ROUTE + '/set'
    public readonly UPDATE = this.PHOTO_ROUTE + '/update'
    public readonly GET_ONE = this.PHOTO_ROUTE + '/get-one/'
    public readonly DELETE = this.PHOTO_ROUTE + '/delete'
}

const PATH = new Photo(routsInput)

export default PATH
