import { web } from "./applications/web.js"

web.listen(process.env.APP_PORT, () => {
    console.log(`Server start on port ${process.env.APP_PORT}`)
})