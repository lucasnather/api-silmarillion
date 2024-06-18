import { RaceAlreadyExist } from "@/errors/race-already-exist.js";
import { RaceFactory } from "@/interfaces/race-factory.js";
import { Races } from "@prisma/client";

type CreateRacesRequest = {
    name: string
    description: string
    origin: string
    whoCreated: string
    otherNames: string[]
}

type CreateRacesResponse = {
    races: Races
    status: number
    message: string
}

export class CreateRacesService {

    constructor(
        private raceRepository: RaceFactory
    ) {}

    async execute(race: CreateRacesRequest): Promise<CreateRacesResponse> {
        const findRaces = await this.raceRepository.findByName(race.name)

        if(findRaces) throw new RaceAlreadyExist()

        const races = await this.raceRepository.create(race)

        return {
            races,
            status: 200,
            message: 'Race Created'
        }

    }
}