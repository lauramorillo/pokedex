import {get, response} from '@loopback/rest';
import {PokemonType} from '../models/pokemon-type';

export class PokemonTypeController {
  constructor() {}

  @get('/pokemon-types', {
    responses: {
      '200': {
        description: 'Get the list of a Pokémon types',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                'x-ts-type': PokemonType,
              },
            },
          },
        },
      },
    },
  })
  @response(200)
  listPokemonTypes(): PokemonType[] {
    return Object.values(PokemonType);
  }
}
