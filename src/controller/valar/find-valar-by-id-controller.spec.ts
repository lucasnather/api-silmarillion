import { afterEach, beforeEach, describe, it } from 'vitest'
import request from 'supertest'
import { Server } from 'node:http'
import { app } from '@/server.js'

let server: Server

beforeEach(async () => {
    server = app.listen(8081)
})

afterEach(async () => {
    server.close()
})

describe('Find Valar By id Test - e2e', () => {

    it('Should be able to find valar by id', async () => {
        request(app)
            .post('/api/valar')
            .send({
                "name": "Manwë",
                "domains": "Ventos, nuvens e em todas as regiões do ar",
                "isAratar": true,
                "otherNames": ["Sulimo", "Senhor do Alento de Arda"] ,
                "vassals": ["Eönwë"]
            }
        )
        

        request(app)
            .get('/api/valar/1')
            .expect(200)

    })

    it('Should not be able to find valar by id', async () => {

        request(app)
            .get('/api/valar/invalid-number')
            .expect(404)

    })
})