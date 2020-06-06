import { Repository, EntityRepository } from 'typeorm';
import { User } from 'src/modules/users/domain/user-aggregate/user';
import { IUserRepository } from 'src/modules/users/domain/user-aggregate/user.repository';

@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository {
}