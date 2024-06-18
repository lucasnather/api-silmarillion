export class RaceAlreadyExist extends Error {
    constructor () {
        super('racer already Exists with this name')
    }
}