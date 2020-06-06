import { IRepository } from 'src/shared/domain';

import { User }  from './user';
import { UserId } from './userId';
import { UserName } from './userName';
import { UserEmail } from './userEmail';

export interface IUserUniquenessChecker {
    isUserNameTaken(userName: UserName): Promise<boolean>;
    IsEmailTaken(userEmail: UserEmail): Promise<boolean>;
}

export interface IUserRepository extends IRepository, IUserUniquenessChecker {
    getById(userId: UserId): Promise<User>;
    save(user: User): Promise<void>;
}
