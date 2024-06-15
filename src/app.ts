import express from 'express'
import { env } from './env/env.js'
import { valarRouter } from './routes/valar-routes.js'
import { app } from './server.js'


app.use(express.json())

const port = env.PORT || 8080

app.get('/', (request, response) => {
    response.json({
        message: 'Hello World - ( Welcome to my Silmarillion API )'
    })
})

app.use(valarRouter)

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
})