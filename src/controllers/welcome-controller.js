import { logger } from "../helpers/logger.js"
import { ResponseError } from "../helpers/response-error.js"

const index = async (req, res) => {
    logger.info('Welcome')
    res.send({ message: 'Welcome' })
}

const healthCheck = async (req, res, next) => {
    try {
        if (req.query.code == 200) {
            res.send({ code: 200, message: 'OK' })
        } else if (req.query.code == 500) {
            throw new ResponseError(500, 'Internal Server Error')
        } else if (req.query.code == 'error') {
            throw new Error('Internal Server Error')
        } else {
            throw new ResponseError(400, 'Bad Request')
        }
    } catch (e) {
        next(e)
    }
}

export default {
    index,
    healthCheck
}