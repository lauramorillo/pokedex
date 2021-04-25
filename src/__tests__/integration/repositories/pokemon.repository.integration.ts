import {expect} from '@loopback/testlab';
import {EntityNotFoundByFieldError} from '../../../errors/EntityNotFoundByFieldError';
import {PokemonRepository} from '../../../repositories';
import {testPokemon} from '../../fixtures/datasources/testpokemon.datasource';
import {givenEmptyDatabase, givenPokemon} from '../../helpers/database.helpers';

describe('PokemonRepository (integration)', () => {
  beforeEach(givenEmptyDatabase);

  describe('findByName()', () => {
    it('retrieves the information of the pokemon with that name', async () => {
      const pokemon = await givenPokemon({name: 'Charmander'});
      const repository = new PokemonRepository(testPokemon);

      const pokemonReturned = await repository.findByName('Charmander');

      expect(pokemonReturned).to.containEql(pokemon);
    });

    it('throws an EntityNotFoundByFieldError if name is not found', async () => {
      const repository = new PokemonRepository(testPokemon);

      try {
        await repository.findByName('Charmander2');
        expect.fail(null, null, 'Should throw an error', '');
      } catch (err) {
        expect(err).to.be.instanceOf(EntityNotFoundByFieldError);
      }
    });
  });
});
