import { Request, Response } from 'express'

import * as reqres from '../api/reqres'
import { FileStorage } from '../utils/fileStorage'


export class UsersController {
	private fileStorage: FileStorage

	constructor(fileStorage: FileStorage) {
		this.fileStorage = fileStorage
	}

	getUser = async (request: Request, response: Response) => {
		const userId = Number(request.params[0])
		const user = await reqres.geUser(userId)

		response.json(user)
	}

	getUserAvatar = async (request: Request, response: Response) => {
		const userId = Number(request.params[0])
		const user = await reqres.geUser(userId)

		const avatarLocation = await this.fileStorage.getAvatarLocation(user.avatar)

		response.end()
		// response.sendFile(avatarLocation)
	}
}
