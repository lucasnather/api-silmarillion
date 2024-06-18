
import { RaceMemoryRepository } from "test/in-memory-repository/race-memory-repository.js";
import { CreateRacesService } from "./create-races-service.js";
import { makeCreateRaces } from "test/factory/create-race-factory.js";


let inMemoryRacesRepository: RaceMemoryRepository
let sut: CreateRacesService

beforeEach(() => {
    inMemoryRacesRepository = new RaceMemoryRepository()
    sut = new CreateRacesService(inMemoryRacesRepository)
})

describe('Create Races Test - unit', () => {
    
    it('Should be able to create a races', async () => {
        const createRaces = makeCreateRaces()

        const { races, message } = await sut.execute(
            createRaces
        )
        
        expect(races.id).toBeTruthy()
        expect(message).toEqual('Race Created')
    })

    it('Should not be able to create a races with same name', async () => {
        const createRaces = makeCreateRaces()

        inMemoryRacesRepository.create(createRaces)

        expect(async () => {
            await sut.execute(
                createRaces
            )
        }).rejects.toBeInstanceOf(Error)
    })
})