import supertest from "supertest"
import { web } from "../src/applications/web.js"

describe('Welcome', () => {
    it('should be able to test', () => {
        expect(1).toBe(1)
    })

    it('should be able access /', async () => {
        const result = await supertest(web)
            .get('/');

        expect(result.status).toBe(200)
        expect(result.body.message).toBeDefined()
    })

    it('should be able to health check with status 200', async () => {
        const result = await supertest(web)
            .get('/health-check?code=200');

        expect(result.status).toBe(200)
        expect(result.body.message).toBeDefined()
    })

    it('should be able to health check with status 400', async () => {
        const result = await supertest(web)
            .get('/health-check');

        expect(result.status).toBe(400)
        expect(result.body.errors).toBeDefined()
    })

    it('should be able to health check with status 500', async () => {
        const result = await supertest(web)
            .get('/health-check?code=500');

        expect(result.status).toBe(500)
    })

    it('should be able to health check error with status 500', async () => {
        const result = await supertest(web)
            .get('/health-check?code=error');

        expect(result.status).toBe(500)
    })
})
