import Path, { routsInput } from '../Path'

class Styles extends Path {
    protected readonly STYLES_ROUTE = this.SERVER_ROUTE + '/styles'

    public readonly GET = this.STYLES_ROUTE + '/get'
    public readonly UPDATE_GENERAL = this.STYLES_ROUTE + '/update-general'
    public readonly UPDATE_DARK = this.STYLES_ROUTE + '/update-dark'
    public readonly UPDATE_LIGHT = this.STYLES_ROUTE + '/update-light'
}

const PATH = new Styles(routsInput)

export default PATH
