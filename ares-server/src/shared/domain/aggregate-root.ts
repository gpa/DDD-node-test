import { AggregateRoot as AggregateRootBase } from '@nestjs/cqrs';
import { Entity } from 'src/shared/domain/entity';
import { applyMixins } from 'src/shared/util/lang-util';

export interface IAggregateRoot {}
export class AggregateRoot {}
export interface AggregateRoot extends AggregateRootBase, Entity {}
applyMixins(AggregateRoot, [AggregateRootBase, Entity]);