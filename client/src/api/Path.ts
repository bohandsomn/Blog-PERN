interface RoutsInput {
    PROTOCOL: 'http'
    NAME: string
    PORT?: string | number
}

export const routsInput: RoutsInput = { 
    PROTOCOL: 'http', 
    NAME: 'localhost', 
    PORT: 5000 
}

export default class Path {
    protected readonly SERVER_ROUTE: string

    constructor({ PROTOCOL, NAME, PORT }: RoutsInput) {
        const SERVER_ADDRESS = PROTOCOL + '://' + NAME 

        this.SERVER_ROUTE = PORT === undefined 
            ? SERVER_ADDRESS + '/api'
            : SERVER_ADDRESS + ':' + PORT + '/api'
    }

    public query = (query: Record<string, string | string[]>): string => {
        const entries = Object.entries(query)

        const joinedEntries = entries
            .map(([key, value]) => key + '=' + value)
            .join('&')
        
        return '?' + joinedEntries
    }
}