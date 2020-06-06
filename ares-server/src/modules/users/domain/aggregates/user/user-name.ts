import { SingleValueObject } from 'src/shared/domain/value-object';
import { UserNameMustBeATokenRule } from 'src/modules/users/domain/rules/user-name-must-be-a-token.rule';
import { UserNameMustBeUniqueRule } from 'src/modules/sers/domain/rules/user-name-must-be-unique.rule';

export class UserName extends SingleValueObject<string> {

    public constructor(name: string, userNameCounter: IUserNameCounter) {
        super();
        this.checkRule(new UserNameMustBeATokenRule(name));
        this.checkRule(new UserNameMustBeUniqueRule(name));
        this._value = name;
    }
}