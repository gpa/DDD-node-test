import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { IMapper } from 'src/shared/infrastructure';

import { IUserRepository } from '../../domain/userRepository';
import { UnitOfWork } from './unitOfWork';

import { User } from '../../domain/user';
import { UserId } from '../../domain/userId';
import { UserName } from '../../domain/userName';
import { UserEmail } from '../../domain/userEmail';
import Knex = require('knex');

@Injectable()
export class UserRepository implements IUserRepository {
  
    private _userMapper: IMapper<User>;
    private _unitOfWork: UnitOfWork;
    private _transaction: Knex.Transaction;

    public constructor(
        @Inject('UserMapper')
        userMapper: IMapper<User>,
        @Inject('UnitOfWork') 
        unitOfWork: UnitOfWork) {
            
        this._userMapper = userMapper;
        this._unitOfWork = unitOfWork;
    }

    public async getById(userId: UserId): Promise<User> {
        const persistence = await (await this.getTransaction())('users').select('*').where('id', userId).limit(1);
        return this._userMapper.toDomain(persistence);
    }

    public async save(user: User): Promise<void> {
        const persistence = this._userMapper.toPersistence(user);
        await this._transaction('users').insert(persistence);
    }

    public async isUserNameTaken(userName: UserName): Promise<boolean> {
        return false;
    }

    public async IsEmailTaken(userEmail: UserEmail): Promise<boolean> {
        return false;
    }

    public getNextIdentity() {
        return uuidv4();
    }

    private async getTransaction() {
        return await this._unitOfWork.getTransaction();
    }
}