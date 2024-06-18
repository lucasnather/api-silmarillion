import { RaceAlreadyExist } from '@/errors/race-already-exist.js'
import { ValaAlreadyExist } from '@/errors/vala-already-exist.js'
import { RaceRepository } from '@/repositories/race-repository.js'
import { CreateRacesService } from '@/service/races/create-races-service.js'
import {Request, Response } from 'express'
import z, { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class CreateRacesController {

    
    static async post(request: Request, response: Response) {
        const racesBodySchema = z.object({
            name: z.string({
                message: "O campo nome é obrigatório"
            }).min(3, 'Campo nome com no mínimo 3 caractres'),
            otherNames: z.string().array(),
            description: z.string(),
            origin: z.string(),
            whoCreated: z.string()
        }).required()

        
        const racesRepository = new RaceRepository()
        const createRacesService = new CreateRacesService(racesRepository)
        
        
        try {
            const { name, otherNames, description,origin, whoCreated } = racesBodySchema.parse(request.body)

            const isFieldsEmpty = !name || !description || !origin || !whoCreated

            if(isFieldsEmpty) throw new Error('Campo name, isAratar e domains é obrigatório')

            const { races, message, status } = await createRacesService.execute({
                name,
                otherNames,
                description,
                origin,
                whoCreated
            })

            return response.status(status).json({
                races,
                message
            })
        } catch (e) {
            if(e instanceof RaceAlreadyExist) {
                return response.status(404).json({
                    message: e.message,
                    status: 404,
                })
            }

            if(e instanceof ZodError) {
                return response.status(404).json({
                    message: 'Validation Error',
                    status: 404,
                    error: fromZodError(e)
                })
            }

            return response.status(500).json({
                message: 'Server Internal Error'
            })
        }
    }
}