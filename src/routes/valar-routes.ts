import { CreateValarController } from '@/controller/valar/create-valar-controller.js'
import { FindManyValarController } from '@/controller/valar/find-many-valar-controlller.js'
import { Router } from 'express'

const router = Router()

router
    .post('/api/valar', (request, response) => CreateValarController.post(request, response))
    .get('/api/valar', (request, response) => FindManyValarController.getAll(request, response))

export const valarRouter = router