import { Injectable } from '@nestjs/common';
import { IMapper } from 'src/shared/infrastructure';
import { User } from '../../domain/user';
import { UserId } from '../../domain/userId';
import { UserName } from '../../domain/userName';
import { UserEmail } from '../../domain/userEmail';
import { UserPassword } from '../../domain/userPassword';

@Injectable()
export class UserMapper implements IMapper<User> {

    toDomain(persistence: any): User {
        return Object.create(User.prototype, {
            _id: Object.create(UserId.prototype, {
                _data: persistence.id
            },),
            _name: Object.create(UserName.prototype, {
                _data: persistence.name
            }),
            _email: Object.create(UserEmail.prototype, {
                _data: persistence.email
            }),
            _password: Object.create(UserPassword.prototype, {
                _data: persistence.password
            })
        });
    }
    
    toPersistence(user: User): object {
        const raw: any = user;
        return {
            id: raw._id.data,
            name: raw._name._data,
            email: raw._email._data,
            password: raw._password._data
        };
    }
}