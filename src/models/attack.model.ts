import {Model, model, property} from '@loopback/repository';

@model()
export class Attack extends Model {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'number',
    required: true,
  })
  damage: number;

  constructor(data?: Partial<Attack>) {
    super(data);
  }
}

export interface AttackRelations {
  // describe navigational properties here
}

export type AttackWithRelations = Attack & AttackRelations;
