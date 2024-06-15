import { CreateValarController } from '@/controller/valar/create-valar-controller.js'
import { FindManyValarController } from '@/controller/valar/find-many-valar-controlller.js'
import { FindValarbyIdController } from '@/controller/valar/find-valar-by-id-controller.js'
import { Router } from 'express'

const router = Router()

router
    .post('/api/valar', (request, response) => CreateValarController.post(request, response))
    .get('/api/valar', (request, response) => FindManyValarController.getAll(request, response))
    .get('/api/valar/:valarId', (request, response) => FindValarbyIdController.get(request, response))

export const valarRouter = router