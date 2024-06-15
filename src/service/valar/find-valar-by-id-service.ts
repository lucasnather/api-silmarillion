import { ResourceNotFound } from "@/errors/resource-not-found.js";
import { ValarDto } from "@/interfaces/dto/valar-dto.js";
import { ValarFactory } from "@/interfaces/valar-factory.js";

type FindValarByIdReQuest = {
    id: number
}

type FindValarByIdResponse = {
    valar: ValarDto
    status: number
}

export class FindValarByIdService {

    constructor(
        private valarRepository: ValarFactory
    ) {}

    async execute( { id }: FindValarByIdReQuest): Promise<FindValarByIdResponse> {
        const findValarById = await this.valarRepository.findById(id)

        if(!findValarById) throw new ResourceNotFound()

        return {
            valar: findValarById,
            status: 200,
        }
    }
}