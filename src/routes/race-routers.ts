import { CreateRacesController } from '@/controller/race/create-race-controller.js'
import { Router } from 'express'

const router = Router()

router
    .post('/api/races', (request, response) => CreateRacesController.post(request, response))

export const racesRouter = router