import { ValarMemoryRepository } from "test/in-memory-repository/valar-memory-repository.js";
import { makeCreateValar } from "test/factory/create-valar-factory.js";
import { FindManyValarService } from "./find-many-valar-service.js";
import { FindValarByIdService } from "./find-valar-by-id-service.js";

let inMemoryValarRepository: ValarMemoryRepository
let sut: FindValarByIdService

beforeEach(() => {
    inMemoryValarRepository = new ValarMemoryRepository()
    sut = new FindValarByIdService(inMemoryValarRepository)
})

describe('Find Valar By Id Test - unit', () => {
    
    it('Should be able to find all valar', async () => {
        const createValar = makeCreateValar({
            id: 10
        })

        inMemoryValarRepository.create(createValar)
       

        const { valar, status } = await sut.execute({
            id: 10
        })

        expect(valar.name).toEqual('Manwë')
        expect(valar.id).toBeTruthy()
        expect(status).toEqual(200)
    })
})