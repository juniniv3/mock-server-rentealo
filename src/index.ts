import express from 'express'
import cors from 'cors'
import { createMiddleware } from '@mswjs/http-middleware'
import { handlers } from './users-mock'

const app = express()
const port = 3000

app.use(cors())
app.use(createMiddleware(...handlers))

app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`)
})
