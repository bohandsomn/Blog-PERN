class Token {
    private static readonly key = 'access'

    public static get = (): string | null => {
        return localStorage.getItem(this.key)
    }

    public static save = (token: string): void => {
        localStorage.setItem(this.key, token)
    }

    public static delete = (): void => {
        localStorage.removeItem(this.key)
    }
}

export default Token
