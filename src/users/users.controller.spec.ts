import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './shared/users.service'
import { UsersController } from './users.controller'

describe('UsersController', () => {
    let controller: UsersController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService]
        }).compile()

        controller = module.get<UsersController>(UsersController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('must have more than 0 users', async () => {
        const users = await controller.getAll()
        expect(users.length).toBeGreaterThan(0)
    })
})
