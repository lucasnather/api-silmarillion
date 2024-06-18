
import { ValarFactory } from "@/interfaces/valar-factory.js";
import { Valar } from "@prisma/client";

export class ValarMemoryRepository implements ValarFactory {
    
    public valar: Valar[] = []
    private id: number = 0
    
    
    async create(vala: Valar) {
        const { name, domains, isAratar, otherNames, vassals } = vala

        const createValar = {
            id: vala.id ?? this.incrementId(),
            name,
            domains,
            isAratar,
            otherNames,
            vassals,
            createdAt: new Date(),
            updatedAt: null,
            deletedAt: null
        } 

        this.valar.push(createValar)

        return createValar
    }

    async findMany() {
        const findAllValar = this.valar.map(({ id, name, otherNames, domains, vassals, isAratar }) => {
            return {
                id, 
                name,
                otherNames,
                domains,
                vassals,
                isAratar
            }
        })

        return findAllValar
    }

    async findById(id: number) {
        const findValar = this.valar.find(vala => vala.id === id)

        const valarNotFound = !findValar

        if(valarNotFound) return null

        const {  name, otherNames, domains, vassals, isAratar } = findValar

        return {
            id,
            name,
            otherNames,
            domains,
            vassals,
            isAratar
        }
    }

    async findByName(name: string) {
        const vala = this.valar.find(vala => vala.name === name)

        if(!vala) return null

        return vala
    }
    

    private incrementId() {
        return ++this.id
    }
  
}