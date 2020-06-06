import { ICommandHandler } from 'src/shared/application';
import { LoggingCommandHandlerDecorator } from './loggingCommandHandlerDecorator';

export function decorateCommandHandler(command: ICommandHandler<any>) {

    return new LoggingCommandHandlerDecorator(command);
}