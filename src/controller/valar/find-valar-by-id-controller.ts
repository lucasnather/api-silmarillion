import { Request, Response } from "express";
import { ValarRepository } from '@/repositories/valar-repository.js'
import { FindValarByIdService } from "@/service/valar/find-valar-by-id-service.js";
import z from "zod";
import { ResourceNotFound } from "@/errors/resource-not-found.js";

export class FindValarbyIdController {

    static async get(request: Request, response: Response) {
        
        const valarParamSchema = z.object({
            valarId: z.coerce.number()
        })

        

        const { valarId } = valarParamSchema.parse(request.params)
        console.log(valarId)

        const valarRepository = new ValarRepository()
        const findManyValarService = new FindValarByIdService(valarRepository)

        try {
            const { status, valar} = await findManyValarService.execute({
                id: valarId
            })

            return response.status(status).json({
                valar,
                status
            })
        } catch(e) {
            if(e instanceof ResourceNotFound) {
                return response.status(404).json({
                    message: e.message
                })
            }

            return response.status(500).json({
                message: 'Server Internal Error'
            })
        }
    }
}