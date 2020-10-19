import { Injectable } from '@nestjs/common'

const users = [
    { name: 'David', age: 18 },
    { name: 'Caio', age: 14 },
    { name: 'Ana', age: 25 },
    { name: 'Lucas', age: 21 },
    { name: 'Nora', age: 16 },
    { name: 'Maicon', age: 17 }
]

@Injectable()
export class UsersService {
    async getAll (name?: string, age?: number) {
        if (name || age) {
            const nameRegex = new RegExp(name || '.*', 'ig')
            return users.filter(user => nameRegex.test(user.name) && user.age === Number(age ?? user.age))
        }
        return users
    }
}
