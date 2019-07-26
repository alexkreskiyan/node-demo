import fetch from 'node-fetch'
import { User } from '../models/User'

const baseUri = 'https://reqres.in/api'


export const geUser = async (id: number): Promise<User> => {
    const response = await fetch(`${baseUri}/user/${id}`)
    const data: Data<User> = await response.json()

    return data.data
}

interface Data<T> {
    data: T
}

interface PagedData<T> {
    data: T[]
    page: number
    per_page: number
    total: number
    total_pages: number
}