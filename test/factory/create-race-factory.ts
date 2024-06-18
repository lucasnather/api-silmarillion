import { Races } from "@prisma/client";

export function makeCreateRaces(
    override: Partial<Races> = {}
) {
    const createRaces: Races = {
        id: 1,
        name: 'Elfos',
        otherNames: ['Primogênitos de Iluvátar'] ,
        description: "Os Elfos são os primogênitos de Eru, são imortais, apenas morrem quando são feridos ou quando cansam",
        origin: "Foram criados na Canção dos Ainur pelos Valar",
        whoCreated: "Valar",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
        ...override
    }   

    return createRaces
}