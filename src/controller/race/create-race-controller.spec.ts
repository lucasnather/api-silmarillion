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

describe('Create Race Test - e2e', () => {

    it('Should be able to create a race', async () => {
        request(app)
            .post('/api/races')
            .send({
                "name": "Elfos",
                "otherNames": ['Primogênitos de Iluvátar'] ,
                "description": "Os Elfos são os primogênitos de Eru, são imortais, apenas morrem quando são feridos ou quando cansam",
                "origin": "Foram criados na Canção dos Ainur pelos Valar",
                "whoCreated": "Valar",
            }
        )
        .expect(201)

    })

    it('Should not be able to create a race', async () => {
        request(app)
            .post('/api/races')
            .send({
                "name": "Elfos",
                "otherNames": ['Primogênitos de Iluvátar'] ,
                "description": "Os Elfos são os primogênitos de Eru, são imortais, apenas morrem quando são feridos ou quando cansam",
                "origin": "Foram criados na Canção dos Ainur pelos Valar",
                "whoCreated": "Valar",
            }
        )

        request(app)
            .post('/api/races')
            .send({
                "name": "Elfos",
                "otherNames": ['Primogênitos de Iluvátar'] ,
                "description": "Os Elfos são os primogênitos de Eru, são imortais, apenas morrem quando são feridos ou quando cansam",
                "origin": "Foram criados na Canção dos Ainur pelos Valar",
                "whoCreated": "Valar",
            }
        ).expect(404)

    })
})