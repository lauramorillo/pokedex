import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param, response} from '@loopback/rest';
import {Pokemon} from '../models';
import {PokemonRepository} from '../repositories';

export class PokemonController {
  constructor(
    @repository(PokemonRepository)
    protected pokemonRepository: PokemonRepository,
  ) {}

  @get('/pokemons/{id}', {
    responses: {
      '200': {
        description: 'Get the info of a Pokémon by id',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pokemon, {includeRelations: true}),
          },
        },
      },
    },
  })
  @response(200)
  async findById(@param.path.string('id') id: string): Promise<Pokemon> {
    return this.pokemonRepository.findById(id);
  }
}
