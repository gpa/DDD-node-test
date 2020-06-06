import { ICommandHandler } from 'src/shared/application';

export class LoggingCommandHandlerDecorator<T> implements ICommandHandler<T> {

    private _decorated: ICommandHandler<T>;

    public constructor(decorated: ICommandHandler<T>) {
        this._decorated = decorated;
    }

    public async execute(command: T): Promise<any> {
        
        console.log('Started executing command...');
        const result = await this._decorated.execute(command);
        console.log('finished executing command...');
        return result;
    }
}