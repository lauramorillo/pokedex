import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PokedexDataSource} from '../datasources';
import {EntityNotFoundByFieldError} from '../errors/EntityNotFoundByFieldError';
import {Pokemon, PokemonRelations} from '../models';

export class PokemonRepository extends DefaultCrudRepository<
  Pokemon,
  typeof Pokemon.prototype.id,
  PokemonRelations
> {
  constructor(@inject('datasources.pokedex') dataSource: PokedexDataSource) {
    super(Pokemon, dataSource);
  }

  async findByName(name: string): Promise<Pokemon> {
    const pokemon = await this.findOne({where: {name}});
    if (pokemon !== null) {
      return pokemon;
    }

    throw new EntityNotFoundByFieldError(this.entityClass, 'name', name);
  }
}
