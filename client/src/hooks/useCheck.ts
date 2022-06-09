import { useMemo } from 'react'
import Error from '../components/UI/molecules/General/Error'
import Spinner from '../components/UI/molecules/General/Spinner'
import type { FulfilledState, PendingState, RejectedState } from '../types/Utility/StateType'

type Fulfilled<Data> = {
    boolean: true
    data: Data
}
type Rejected = {
    boolean: false
    element: React.FC
}

export const useCheck = <Data>(state: FulfilledState<Data> | PendingState | RejectedState): Fulfilled<Data> | Rejected => {
    return useMemo(() => {
        if (state.isLoading) {
            return {
                boolean: false,
                element: Spinner
            }
        }
    
        if (state.isError) {
            return {
                boolean: false,
                element: Error
            }
        }
    
        return {
            boolean: true,
            data: state.data
        }
    }, [state])
}
