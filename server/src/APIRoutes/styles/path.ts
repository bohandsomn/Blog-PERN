export class Styles {
    protected readonly STYLES_ROUTE = '/styles'

    public readonly GET = this.STYLES_ROUTE + '/get'
    public readonly UPDATE_GENERAL = this.STYLES_ROUTE + '/update-general'
    public readonly UPDATE_DARK = this.STYLES_ROUTE + '/update-dark'
    public readonly UPDATE_LIGHT = this.STYLES_ROUTE + '/update-light'
}

const STYLES = new Styles()

export default STYLES as {
    readonly GET: 'http://domain-name:port/api/styles/get'
    readonly UPDATE_GENERAL: 'http://domain-name:port/api/styles/update-general'
    readonly UPDATE_DARK: 'http://domain-name:port/api/styles/update-dark'
    readonly UPDATE_LIGHT: 'http://domain-name:port/api/styles/update-light'
}