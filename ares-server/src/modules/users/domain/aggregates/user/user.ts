import { AggregateRoot } from 'src/shared/domain/aggregate-root';
import { EntityId } from 'src/shared/domain/entity';
import { UserCreatedEvent } from 'src/modules/users/domain/events/user-created.event'
import { UserName } from 'src/modules/users/domain/user-aggregate/user-name';
import { UserPassword } from 'src/modules/users/domain/user-aggregate/user-password';
import { UserEmail } from 'src/modules/users/domain/user-aggregate/user-email';

export class User extends AggregateRoot {

    private _name: UserName;

    private _email: UserEmail;

    private _password: UserPassword;

    private constructor(name: UserName, email: UserEmail, password: UserPassword, id?: EntityId) {
        super();
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }

    public static register(name: UserName, email: UserEmail, password: UserPassword, id?: EntityId): User {

        const idWasProvided = !!id;
        if (!idWasProvided) {
            this.apply(new UserCreatedEvent(id));
        }

        return new User(name, email, password, id);
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
}