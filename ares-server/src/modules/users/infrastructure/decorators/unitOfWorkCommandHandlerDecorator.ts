import { ICommandHandler } from 'src/shared/application';
import { UnitOfWork } from '../persistence/unitOfWork';

export class UnitOfWorkCommandHandlerDecorator<T> implements ICommandHandler<T> {

    private _unitOfWork: UnitOfWork;
    private _decorated: ICommandHandler<T>;

    public constructor(unitOfWork: UnitOfWork, decorated: ICommandHandler<T>) {
        this._unitOfWork = unitOfWork;
        this._decorated = decorated;
    }

    public async execute(command: T): Promise<any> {
        
        let result: any;
        try {
            result = await this._decorated.execute(command);
        } catch(e) {
            try {
                await this._unitOfWork.rollback();
            } catch {}
            throw e;
        }

        await this._unitOfWork.commit();
        return result;
    }
}