import { toast, ToastContent, ToastOptions, TypeOptions } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

toast.configure({ theme: 'dark' })

type UpdateTo = {
    toastId: React.ReactText
    message: string
    type: TypeOptions | null
}

export default class Notify {
    private static readonly autoClose = 3000

    private static readonly UpdateTo = ({toastId, message, type}: UpdateTo) => {
        toast.update(toastId, {
            type,
            render: message,
            isLoading: false,
            autoClose: this.autoClose
        })
    }

    public static readonly UpdateToError = (toastId: React.ReactText, message: string) => {
        this.UpdateTo({ toastId, message, type: 'error' })
    } 

    public static readonly UpdateToSuccess = (toastId: React.ReactText, message: string) => {
        this.UpdateTo({ toastId, message, type: 'success' })
    } 

    public static readonly UpdateToDefault = (toastId: React.ReactText, message: string) => {
        this.UpdateTo({ toastId, message, type: 'default' })
    } 

    public static readonly UpdateToInfo = (toastId: React.ReactText, message: string) => {
        this.UpdateTo({ toastId, message, type: 'info' })
    } 

    public static readonly Loading = (content: ToastContent = 'Loading...', options?: ToastOptions): React.ReactText => {
        return toast.loading(content, options)
    }
}
