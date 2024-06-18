import { ValaAlreadyExist } from '@/errors/vala-already-exist.js'
import { ValarRepository } from '@/repositories/valar-repository.js'
import { CreateValarService } from '@/service/valar/create-valar-service.js'
import {Request, Response } from 'express'
import z, { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

export class CreateValarController {

    
    static async post(request: Request, response: Response) {
        const valarBodySchema = z.object({
            name: z.string({
                message: "O campo nome é obrigatório"
            }),
            otherNames: z.string().array(),
            vassals: z.string().array(),
            domains: z.string(),
            isAratar: z.boolean()
        })

        
        const valarRepository = new ValarRepository()
        const createValarService = new CreateValarService(valarRepository)
        
        
        try {
            const { name, otherNames, vassals, domains, isAratar } = valarBodySchema.parse(request.body)

            const { valar, message, status } = await createValarService.execute({
                name,
                otherNames,
                domains,
                vassals,
                isAratar
            })

            return response.status(status).json({
                valar,
                message
            })
        } catch (e) {
            if(e instanceof ValaAlreadyExist) {
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