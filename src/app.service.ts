import { Injectable } from '@nestjs/common'

const lastRestart = new Date()

@Injectable()
export class AppService {
    getInfo (): {app: string, lastRestart: Date, now: Date, pid: number} {
        return { app: process.env.APP_NAME, lastRestart, now: new Date(), pid: process.pid }
    }
}
