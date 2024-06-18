import { prisma } from "@/database/prisma.js";
import { RaceFactory } from "@/interfaces/race-factory.js";
import { Prisma } from "@prisma/client";


export class RaceRepository implements RaceFactory {

    async create(race: Prisma.RacesCreateInput) {
        const { name, otherNames, description, origin, whoCreated } = race

        const createRace = await prisma.races.create({
            data: {
                name,
                otherNames,
                description,
                origin,
                whoCreated
            }
        })

        return createRace
    }

    async findByName(name: string) {
        const findRace = await prisma.races.findUnique({
            where: {
                name
            }
        })

        const raceNotFound = !findRace

        if(raceNotFound) return null

        return findRace
    }
    
    
}