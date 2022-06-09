import { createTransport, Transporter } from 'nodemailer'
import config from 'config'

const transportOptions = config.get('transport-options') as {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }
    tls: {
        rejectUnauthorized: boolean
    }
}
const API_URL = config.get<string>('API_URL')

class Service {
    transporter: Transporter

    constructor() {
        this.transporter = createTransport(transportOptions)
    }

    sendActivationMail = async (to: string, link: string) => {
        await this.transporter.sendMail({
            from: transportOptions.auth.user,
            to,
            subject: `Activate account on ${API_URL}`,
            html:
                `
                    <div>
                        <h1>To activate follow the link</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

export default new Service()