import { Prisma, Valar } from "@prisma/client"
import { ValarDto } from "./dto/valar-dto.js"


export interface ValarFactory {
    create(valar: Prisma.ValarCreateInput | Valar ): Promise<Valar>
    findMany(): Promise<ValarDto[]>
    findById(id: number): Promise<ValarDto | null>
}