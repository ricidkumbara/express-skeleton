import winston from "winston"
import DailyRotateFile from 'winston-daily-rotate-file'

export const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            level: 'info',
            filename: `./logs/info.%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: `${process.env.LOG_MAX_SIZE}`,
            maxFiles: `${process.env.LOG_MAX_RETENTION}`
        })
    ]
})

export const errorLogger = winston.createLogger({
    level: 'error',
    transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            level: 'error',
            filename: `./logs/error.%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: `${process.env.LOG_MAX_SIZE}`,
            maxFiles: `${process.env.LOG_MAX_RETENTION}`
        })
    ]
});