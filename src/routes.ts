import { Express } from 'express'

import { UsersController } from './controllers/users.controller'
import { FileStorage } from './utils/fileStorage';


export const routes = async (app: Express) => {
	const fileStorage = new FileStorage()
	const usersController = new UsersController(fileStorage)

	app.get(/\/api\/user\/(\d+)$/, usersController.getUser)
	app.get(/\/api\/user\/(\d+)\/avatar$/, usersController.getUserAvatar)
}