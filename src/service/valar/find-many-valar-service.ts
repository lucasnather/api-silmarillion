import { ValarDto } from "@/interfaces/dto/valar-dto.js";
import { ValarFactory } from "@/interfaces/valar-factory.js";
import { Valar } from "@prisma/client";


type FindManyValarResponse = {
    valar: ValarDto[]
    status: number
}

export class FindManyValarService {

    constructor(
        private valarRepository: ValarFactory
    ) {}

    async execute(): Promise<FindManyValarResponse> {
        const findAllValar = await this.valarRepository.findMany()

        return {
            valar: findAllValar,
            status: 200,
        }
    }
}