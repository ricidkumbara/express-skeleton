import { ResponseError } from '../helpers/response-error.js'
import { errorLogger } from '../helpers/logger.js'

const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next()
        return
    }

    errorLogger.error(`${(new Date())}: ${err.message}`)
    
    if (err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        }).end()
    } else {
        res.status(500).end();
    }
}

export {
    errorMiddleware
}