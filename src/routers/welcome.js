import express from 'express'
import welcomeController from '../controllers/welcome-controller.js'

const welcomeRouter = new express.Router()

welcomeRouter.get('/', welcomeController.index)
welcomeRouter.get('/health-check', welcomeController.healthCheck)

export {
    welcomeRouter
}