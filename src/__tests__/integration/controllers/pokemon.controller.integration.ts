import {expect} from '@loopback/testlab';
import {PokemonController} from '../../../controllers';
import {PokemonRepository} from '../../../repositories';
import {testPokemon} from '../../fixtures/datasources/testpokemon.datasource';
import {givenEmptyDatabase, givenPokemon} from '../../helpers/database.helpers';

describe('PokemonController (integration)', () => {
  beforeEach(givenEmptyDatabase);

  describe('findById()', () => {
    it('retrieves the information of the pokemon with that id', async () => {
      const pokemon = await givenPokemon({id: '005'});
      const controller = new PokemonController(
        new PokemonRepository(testPokemon),
      );

      const pokemonReturned = await controller.findById('005');

      expect(pokemonReturned).to.containEql(pokemon);
    });
  });

  describe('findByName()', () => {
    it('retrieves the information of the pokemon with that name', async () => {
      const pokemon = await givenPokemon({name: 'Charmander'});
      const controller = new PokemonController(
        new PokemonRepository(testPokemon),
      );

      const pokemonReturned = await controller.findByName('Charmander');

      expect(pokemonReturned).to.containEql(pokemon);
    });
  });
});
