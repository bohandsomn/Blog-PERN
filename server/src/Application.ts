import express from 'express'
import config from 'config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { createServer } from 'http'

import errorHandlerMiddleware from './middlewares/errorHandler'
import APIRouter from './APIRoutes'
import sequelize from './database/sequelize'
import WebSocket from './services/WebSocket'

const PORT = config.get<number>('PORT')

class Application {
    public readonly application
    public readonly server
   
    constructor() {
        this.application = express()
        this.server = createServer(this.application)
    
        this.initializeMiddlewares()
        this.initializeRouter()
        this.initializeErrorHandling()
        this.socketConnection()
    }
   
    public async listen() {
        await this.connectToTheDatabase()
        this.server.listen(PORT, () => console.log(`Server application listening on port ${PORT}`))
    }
   
    private initializeMiddlewares() {
        this.application.use(cors({
            credentials: true,
            origin: true,
        }))

        this.application.use(express.json({ 
            limit: '50mb' 
        }))

        this.application.use(cookieParser())
    }
   
    private initializeRouter() {
        this.application.use('/', APIRouter)
    }
   
    private initializeErrorHandling() {
        this.application.use(errorHandlerMiddleware)
    }

    private socketConnection() {
        const io = new WebSocket(this.server)

        io.connection()
    }
   
    private async connectToTheDatabase() {
        try {
            await sequelize.authenticate()
        } catch (error) {
            console.log(error)
            sequelize.close()
        }
    }
}
 
export default Application
