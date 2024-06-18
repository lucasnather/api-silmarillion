import { ValarMemoryRepository } from "test/in-memory-repository/valar-memory-repository.js";
import { CreateValarService } from "./create-valar-service.js";
import { makeCreateValar } from "test/factory/create-valar-factory.js";
import { ValaAlreadyExist } from "@/errors/vala-already-exist.js";

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

    it('Should not be able to create a valar with same name', async () => {
        const createValar = makeCreateValar({
            name: "Varda"
        })

        inMemoryValarRepository.create(createValar)

        expect(async () => {
            await sut.execute(
                createValar
            )
        }).rejects.toBeInstanceOf(ValaAlreadyExist)
    })
})