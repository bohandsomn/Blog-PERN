import Options from '../Options'

export default class User extends Options {
    public static GetSubscribers = () => {
        return this.GET()
    }

    public static GetSubscriptions = () => {
        return this.GET()
    }

    public static GetPreview = () => {
        return this.GET()
    }

    public static GetOne = () => {
        return this.GET()
    }

    public static Subscribe = () => {
        return this.PATCH()
    }

    public static Unsubscribe = () => {
        return this.PATCH()
    }
}