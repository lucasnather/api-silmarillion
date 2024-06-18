import express from 'express'
import { env } from './env/env.js'
import { valarRouter } from './routes/valar-routes.js'
import { app } from './server.js'
import swaggerUIExpress from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

app.use(express.json())

const port = env.PORT || 8080

app.use(
    "/docs",
    swaggerUIExpress.serve,
    swaggerUIExpress.setup(swaggerDocs, { explorer: true})
);

app.use(valarRouter)

app.get('/', (request, response) => {
    response.json({
        message: 'Hello World - ( Welcome to my Silmarillion API )'
    })
})


app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`)
    console.log(`Docs running at route http://localhost:${port}/docs`)
})