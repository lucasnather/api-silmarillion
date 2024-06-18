import { prisma } from "@/database/prisma.js";
import { ValarFactory } from "@/interfaces/valar-factory.js";
import { Prisma } from "@prisma/client";


export class ValarRepository implements ValarFactory {

    async create(valar: Prisma.ValarCreateInput) {
        const { domains, isAratar, name, vassals, otherNames } = valar

        const createValar = await prisma.valar.create({
            data: {
                name,
                otherNames,
                domains,
                vassals,
                isAratar
            }
        })

        return createValar
    }

    async findMany() {
        const findAllValar = await prisma.valar.findMany({
            select: {
                id: true,
                name: true,
                otherNames: true,
                domains: true,
                vassals: true,
                isAratar: true
            }
        })

        return findAllValar
    }

    async findById(id: number) {
        const findValar = await prisma.valar.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                otherNames: true,
                domains: true,
                vassals: true,
                isAratar: true
            }
        })

        const valarNotFound = !findValar

        if(valarNotFound) return null

        return findValar
    }

    async findByName(name: string) {
        const findValar = await prisma.valar.findUnique({
            where: {
                name
            }
        })

        const valarNotFound = !findValar

        if(valarNotFound) return null

        return findValar
    }
    
    
}