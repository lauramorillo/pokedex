import {Client, expect} from '@loopback/testlab';
import {PokedexApplication} from '../..';
import {givenEmptyDatabase, givenPokemon} from '../helpers/database.helpers';
import {setupApplication} from './test-helper';

describe('PokemonController', () => {
  let app: PokedexApplication;
  let client: Client;

  before(givenEmptyDatabase);
  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('GET pokemons/{id}', () => {
    it('finds the pokemon', async () => {
      const pokemon = await givenPokemon({id: '001'});

      const res = await client.get('/pokemons/001').expect(200);

      expect(res.body).to.be.eql(pokemon);
    });
  });
});
