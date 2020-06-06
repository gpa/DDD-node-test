import { User } from 'src/modules/users/domain/user-aggregate/user';
import { ICRUDRepository, IValueCounter } from 'src/shared/infrastructure/repository';

export interface IUserRepository extends ICRUDRepository<User> {}
export interface IUserNameCounter extends IValueCounter {}
export interface IEmailCounter extends IValueCounter {}