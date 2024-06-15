import { ValarMemoryRepository } from "test/in-memory-repository/valar-memory-repository.js";
import { makeCreateValar } from "test/factory/create-valar-factory.js";
import { FindManyValarService } from "./find-many-valar-service.js";

let inMemoryValarRepository: ValarMemoryRepository
let sut: FindManyValarService

beforeEach(() => {
    inMemoryValarRepository = new ValarMemoryRepository()
    sut = new FindManyValarService(inMemoryValarRepository)
})

describe('Find Many Valar Test - unit', () => {
    
    it('Should be able to find all valar', async () => {
        const createValar = makeCreateValar()
        const createOtherValar = makeCreateValar({
            name: 'Varda',
            domains: 'Seu poder estar na luz',
            otherNames: ['Senhora das Estrelas', 'Elentári'],
            vassals: []
        })

        inMemoryValarRepository.create(createValar)
        inMemoryValarRepository.create(createOtherValar)

        const { valar, status } = await sut.execute()

        expect(valar).toHaveLength(2)
        expect(valar[1].name).toEqual('Varda')
        expect(status).toEqual(200)
    })
})