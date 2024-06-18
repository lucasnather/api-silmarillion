import { Prisma, Races } from "@prisma/client";

export interface RaceFactory {
    create(race: Prisma.RacesCreateInput): Promise<Races>
    findByName(name: string): Promise<Races | null>
}