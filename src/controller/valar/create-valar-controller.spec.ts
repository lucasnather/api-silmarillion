import express from 'express'
import { afterEach, beforeEach, describe, it } from 'vitest'
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

describe('Create Valar Test - e2e', () => {

    it('Shoulbe able to create a valar', async () => {
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
        .expect(201)

    })
})