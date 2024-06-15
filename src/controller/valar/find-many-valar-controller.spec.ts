import express from 'express'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import request from 'supertest'
import { Server } from 'node:http'

let app = express()
let server: Server

beforeEach(async () => {
    server = app.listen(8081)
})

afterEach(async () => {
    server.close()
})

describe('Find Many Valar Test - e2e', () => {

    it('Should be able to find many valar', async () => {
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
            .get('/api/valar')
            .expect(200)

    })
})