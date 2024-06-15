import { ValarFactory } from "@/interfaces/valar-factory.js";
import { Valar } from "@prisma/client";

type CreateValarRequest = {
    name: string
    domains: string
    otherNames: string[]
    vassals: string[]
    isAratar: boolean
}

type CreateValarResponse = {
    valar: Valar
    status: number
    message: string
}

export class CreateValarService {

    constructor(
        private valarRepository: ValarFactory
    ) {}

    async execute(valar: CreateValarRequest): Promise<CreateValarResponse> {
        const createValar = await this.valarRepository.create(valar)

        return {
            valar: createValar,
            status: 201,
            message: `Valar ${valar.name} Created`
        }
    }
}