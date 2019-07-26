import { Express } from 'express'

import { UsersController } from './controllers/users.controller'


export const routes = async (app: Express) => {
	const usersController = new UsersController()
	app.get('/api/user/:userId', usersController.getUser)
}