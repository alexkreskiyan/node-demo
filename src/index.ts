import * as express from 'express'

import { server } from './server'
import { routes } from './routes'
import { configuration } from './configuration'

import { log } from './utils/logger'


const app = express()
server(app, routes)

app.listen(configuration.port, () => log(`server started: http://localhost:${configuration.port}/`))