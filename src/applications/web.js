import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import { welcomeRouter } from '../routers/welcome.js'
import { errorMiddleware } from '../middlewares/error-middleware.js'

const web = express()

web.use(morgan('tiny'))
web.use(express.json())

web.use(welcomeRouter)

web.use(errorMiddleware)

export {
    web
}