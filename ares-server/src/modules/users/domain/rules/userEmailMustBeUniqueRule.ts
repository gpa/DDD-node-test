import { IBusinessRule } from 'src/shared/domain';
import { IUserUniquenessChecker } from '../userRepository';
import { UserEmail } from '../userEmail';

export class UserEmailMustBeUniqueRule implements IBusinessRule {
    
    public constructor(
        private readonly _userEmail: UserEmail, 
        private readonly _userUniquenessChecker: IUserUniquenessChecker)
    {
    }

    async isBroken() {
        return await this._userUniquenessChecker.IsEmailTaken(this._userEmail);
    }
    
    getMessage(): string {
        return "The given e-mail is already in use.";
    }
}