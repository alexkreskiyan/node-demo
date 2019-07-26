import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'
import fetch from 'node-fetch'

export class FileStorage {
    private baseDir: string = path.join(process.cwd(), 'avatars')

    async getAvatarLocation(url: string): Promise<string> {
        const urlHash = crypto.createHash('sha256').update(url).digest('hex')
        const fileLocation = path.join(this.baseDir, urlHash)

        if (!fs.existsSync(fileLocation)) {
            const bodyStream = (await fetch(url)).body
            bodyStream.pipe(fs.createWriteStream(fileLocation)).end()
        }

        return urlHash
    }
}