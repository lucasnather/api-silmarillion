import { Request, Response } from "express";
import { ValarRepository } from '@/repositories/valar-repository.js'
import { FindManyValarService } from '@/service/valar/find-many-valar-service.js'

export class FindManyValarController {

    static async getAll(request: Request, response: Response) {

        const valarRepository = new ValarRepository()
        const findManyValarService = new FindManyValarService(valarRepository)

        try {
            const { status, valar } = await findManyValarService.execute()

            return response.status(status).json({
                valar,
                status
            })
        } catch(e) {
            return response.status(500).json({
                message: 'Server Internal Error'
            })
        }
    }
}