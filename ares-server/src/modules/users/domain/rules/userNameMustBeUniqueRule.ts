import { IBusinessRule } from 'src/shared/domain';
import { IUserUniquenessChecker } from '../userRepository';
import { UserName } from '../userName';

export class UserNameMustBeUniqueRule implements IBusinessRule {

    public constructor(
        private readonly _userName: UserName, 
        private readonly _userCounter: IUserUniquenessChecker) {
    }

    async isBroken() {
        return await this._userCounter.isUserNameTaken(this._userName);
    }
    
    getMessage(): string {
        return "The given user name is already taken.";
    }
}