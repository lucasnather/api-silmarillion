

import { RaceFactory } from "@/interfaces/race-factory.js";
import { Races } from "@prisma/client";

export class RaceMemoryRepository implements RaceFactory {
    
    public race: Races[] = []
    private id: number = 0
    
    
    async create(race: Races) {
        const { name, description, origin, otherNames,whoCreated } = race

        const createRace = {
            id: race.id ?? this.incrementId(),
            name,
            description,
            origin,
            whoCreated,
            otherNames,
            createdAt: new Date(),
            updatedAt: null,
            deletedAt: null
        } 

        this.race.push(createRace)

        return createRace
    }

    async findByName(name: string) {
        const race = this.race.find(race => race.name === name)

        if(!race) return null

        return race
    }
    

    private incrementId() {
        return ++this.id
    }
  
}