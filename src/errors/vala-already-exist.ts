export class ValaAlreadyExist extends Error {
    constructor () {
        super('valar already Exists with this name')
    }
}