import { ValarRepository } from '@/repositories/valar-repository.js'
import { CreateValarService } from '@/service/valar/create-valar-service.js'
import { Request, Response } from 'express'
import z from 'zod'

export class CreateValarController {

    
    static async post(request: Request, response: Response) {
        const valarBodySchema = z.object({
            name: z.string(),
            otherNames: z.string().array(),
            vassals: z.string().array(),
            domains: z.string(),
            isAratar: z.boolean()
        })

        const { name, otherNames, vassals, domains, isAratar } = valarBodySchema.parse(request.body)
        console.log(name)

        const valarRepository = new ValarRepository()
        const createValarService = new CreateValarService(valarRepository)
     

        try {
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
        } catch (error) {
            return response.status(500).json({
                message: 'Server Internal Error'
            })
        }
    }
}