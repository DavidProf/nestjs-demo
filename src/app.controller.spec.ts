import { ConfigModule } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [ConfigModule.forRoot()],
            controllers: [AppController],
            providers: [AppService]
        }).compile()

        appController = app.get<AppController>(AppController)
    })

    describe('root', () => {
        it('should return info about project', () => {
            const info = appController.getInfo()
            expect(typeof info.lastRestart).toBe('string')
            expect(typeof info.app).toBe('string')
            expect(typeof info.pid).toBe('number')
            expect(appController.getInfo().app).toBe('nestjs-demo')
        })
    })
})
