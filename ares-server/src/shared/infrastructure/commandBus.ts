import { ICommandBus } from '../application/commandBus';
import { ICommand } from '../application/command';
import { ICommandHandler } from '../application/commandHandler';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CommandBus implements ICommandBus {

    private _handlers = new Map<string, ICommandHandler<ICommand>>();

    execute<T extends ICommand>(command: T): Promise<any> {
        throw new Error("Method not implemented.");
    }

    bind<T extends ICommand>(handler: ICommandHandler<T>, name: string) {
        this._handlers.set(name, handler);
      }
}