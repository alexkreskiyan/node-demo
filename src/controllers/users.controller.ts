import { Request, Response } from 'express'

import * as reqres from '../api/reqres'

export class UsersController {
	getUser = async (request: Request, response: Response) => {
		const userId = request.params.userId
		const user = await reqres.geUser(userId)

		response.json(user)
	}
}
