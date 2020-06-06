import {
    User,
    IUserRepository,
} from '../domain';
import { GetUserInfoQuery } from './queryApi/getUserInfoQuery';
import { GetUserInfoQueryResponse } from './queryApi/getUserInfoQueryResponse';

export class UserQueryService {

    private _userRepository: IUserRepository;

    public constructor(userRepository: IUserRepository) {
        this._userRepository = userRepository;
    }

    public async getUserInfo(getUserInfoQuery: GetUserInfoQuery): Promise<GetUserInfoQueryResponse> {
        return null;
    }
}