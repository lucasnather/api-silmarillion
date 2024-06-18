import { NextFunction, Request, Response } from "express";
import { ValarRepository } from '@/repositories/valar-repository.js'
import { FindValarByIdService } from "@/service/valar/find-valar-by-id-service.js";
import z, { ZodError } from "zod";
import { ResourceNotFound } from "@/errors/resource-not-found.js";
import { fromZodError } from "zod-validation-error";

export class FindValarbyIdController {

    static async get(request: Request, response: Response) {
        
        const valarParamSchema = z.object({
            valarId: z.coerce.number()
        })

        const valarRepository = new ValarRepository()
        const findManyValarService = new FindValarByIdService(valarRepository)
        
        try {
            const { valarId } = valarParamSchema.parse(request.params)

            const { status, valar} = await findManyValarService.execute({
                id: valarId
            })

            return response.status(status).json({
                valar,
                status
            })
        } catch(e) {
            if(e instanceof ZodError) {
                return response.status(404).json({
                    message: 'Validation Error',
                    status: 404,
                    error: fromZodError(e)
                })
            }

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