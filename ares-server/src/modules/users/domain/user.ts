import { IAggregateRoot, Entity, ValidationError } from 'src/shared/domain';

import { UserCreatedDomainEvent } from './events/userCreatedEvent';
import { UserNameMustBeUniqueRule } from './rules/userNameMustBeUniqueRule';
import { UserEmailMustBeUniqueRule } from './rules/userEmailMustBeUniqueRule';

import { UserId, UserName, UserEmail, UserPassword, IUserUniquenessChecker } from './';

export class User extends Entity implements IAggregateRoot {

    private _id: UserId;
    private _name: UserName;
    private _email: UserEmail;
    private _password: UserPassword;

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get email() {
        return this._email;
    }

    public get password() {
        return this._password;
    }

    public static async register(
        id: UserId,
        name: UserName,
        email: UserEmail,
        password: UserPassword,
        userUniquenessChecker: IUserUniquenessChecker) {
        
        await User.checkRule(new UserNameMustBeUniqueRule(name, userUniquenessChecker));
        await User.checkRule(new UserEmailMustBeUniqueRule(email, userUniquenessChecker));

        return new User(id, name, email, password);
    }

    public async changePassword(newPassword: UserPassword) {
        this._password = newPassword;
    }

    public async changeEmail(newEmail: UserEmail, userUniquenessChecker: IUserUniquenessChecker) {

        if (newEmail == this.email) {
            throw new ValidationError('The new email cannot be the same as the old email.');
        }
        await this.checkRule(new UserEmailMustBeUniqueRule(newEmail, userUniquenessChecker));
        this._email = newEmail;
    }

    private constructor(
        id: UserId,
        name: UserName,
        email: UserEmail,
        password: UserPassword) {

        super();
        
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;

        this.addDomainEvent(new UserCreatedDomainEvent(id));
    }
}