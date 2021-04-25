import {Entity, model, property} from '@loopback/repository';
import {Evolution, EvolutionRequirements, Range} from '.';
import {AttackConfiguration} from './attack-configuration.model';
import {PokemonType} from './pokemon-type';

@model()
export class Pokemon extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  classification: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  types: PokemonType[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  resistant: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  weaknesses: string[];

  @property({
    type: 'object',
    required: true,
  })
  weight: Range;

  @property({
    type: 'object',
    required: true,
  })
  height?: Range;

  @property({
    type: 'number',
    required: true,
  })
  fleeRate: number;

  @property({
    type: 'object',
    required: false,
  })
  evolutionRequirements: EvolutionRequirements;

  @property({
    type: 'array',
    itemType: 'object',
    required: false,
  })
  evolutions: Evolution[];

  @property({
    type: 'number',
    required: true,
  })
  maxCP: number;

  @property({
    type: 'number',
    required: true,
  })
  maxHP: number;

  @property({
    type: 'object',
    required: true,
  })
  attacks: AttackConfiguration;

  @property({
    type: 'object',
    required: false,
  })
  'Previous evolution(s)': Evolution;

  constructor(data?: Partial<Pokemon>) {
    super(data);
  }
}

export interface PokemonRelations {}

export type PokemonWithRelations = Pokemon & PokemonRelations;
