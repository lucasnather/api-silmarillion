import { ValarMemoryRepository } from "test/in-memory-repository/valar-memory-repository.js";
import { CreateValarService } from "./create-valar-service.js";
import { makeCreateValar } from "test/factory/create-valar-factory.js";

let inMemoryValarRepository: ValarMemoryRepository
let sut: CreateValarService

beforeEach(() => {
    inMemoryValarRepository = new ValarMemoryRepository()
    sut = new CreateValarService(inMemoryValarRepository)
})

describe('Create Valar Test - unit', () => {
    
    it('Should be able to create a valar', async () => {
        const createValar = makeCreateValar()

        const { valar, message } = await sut.execute(
            createValar
        )
        
        expect(valar.id).toBeTruthy()
        expect(message).toEqual('Valar Manwë Created')
    })
})