import { Controller, Get, Query } from '@nestjs/common'
import { UsersService } from './shared/users.service'

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService) {}
    /**
     * Get all users registered in the system
     * @param name user name partial or complete to search
     */
    @Get()
    getAll (@Query('name') name?: string, @Query('age') age?: number) {
        return this.usersService.getAll(name, age)
    }
}
