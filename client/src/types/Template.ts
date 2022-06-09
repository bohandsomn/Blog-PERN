type FulfiledTemplate<D> = {
    data: D
    serverMessage: {
        message: string
        status: '1' | '2' | '3'
    }
}

type RejectdTemplate = {
    data: null
    serverMessage: {
        message: string
        status: '4' | '5'
    }
}

type Template<D> = FulfiledTemplate<D> | RejectdTemplate

export type { 
    FulfiledTemplate, 
    RejectdTemplate
}

export default Template
