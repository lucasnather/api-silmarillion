import { CreateValarController } from '@/controller/valar/create-valar-controller.js'
import { Router } from 'express'

const router = Router()

router
    .post('/api/valar', (request, response) => CreateValarController.post(request, response))

export const valarRouter = router