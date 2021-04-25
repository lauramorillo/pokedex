import {Model, model, property} from '@loopback/repository';

@model()
export class Range extends Model {
  @property({
    type: 'string',
    required: true,
  })
  minimum: string;

  @property({
    type: 'string',
    required: true,
  })
  maximum: string;

  constructor(data?: Partial<Range>) {
    super(data);
  }
}

export interface RangeRelations {}

export type RangeWithRelations = Range & RangeRelations;
