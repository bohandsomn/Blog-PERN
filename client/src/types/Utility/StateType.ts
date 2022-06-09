// type State<Data> = {
//     isLoading: boolean
//     isError: boolean
//     data: Data | null
// }

export interface InitialState extends PendingState {
    
}

export interface FulfilledState<Data> {
    isLoading: false
    isError: false
    data: Data
}

export interface PendingState {
    isLoading: true
    isError: false
    data: null
}

export interface RejectedState {
    isLoading: false
    isError: true
    data: null
}
