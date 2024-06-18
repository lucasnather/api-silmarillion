import { Valar } from "@prisma/client";

export function makeCreateValar(
    override: Partial<Valar> = {}
) {
    const createValar: Valar = {
        id: 1,
        name: 'Manwë',
        domains: 'Ventos, nuvens e em todas as regiões do ar',
        isAratar: true,
        otherNames: ['Sulimo', 'Senhor do Alento de Arda'] ,
        vassals: ['Eönwë'],
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
        ...override
    }   

    return createValar
}