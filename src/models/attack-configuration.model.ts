import {Model, model, property} from '@loopback/repository';
import {Attack} from '.';

@model()
export class AttackConfiguration extends Model {
  @property({
    type: 'array',
    itemType: Attack,
    required: true,
  })
  fast: object[];

  @property({
    type: 'array',
    itemType: Attack,
    required: true,
  })
  special: object[];

  constructor(data?: Partial<AttackConfiguration>) {
    super(data);
  }
}

export interface AttackConfigurationRelations {}

export type AttackConfigurationWithRelations = AttackConfiguration &
  AttackConfigurationRelations;
