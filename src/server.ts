import { Express } from 'express'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'

import { configuration } from './configuration'

export async function server(
	app: Express,
	routes: (app: Express) => Promise<void>,
) {
	// setup logger
	app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

	// for development - disable caching
	if (configuration.isDevelopment) {
		app.use((request, response, next) => {
			response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
			response.header('Expires', '-1')
			response.header('Pragma', 'no-cache')
			next()
		})
	}

	// add body parsers
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: true }))

	// apply routes
	await routes(app)

	// for missing address - send 404
	app.use((req, res) => res.status(404).send())
}