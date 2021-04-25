import {Client, expect} from '@loopback/testlab';
import {PokedexApplication} from '../..';
import {givenEmptyDatabase, givenPokemon} from '../helpers/database.helpers';
import {setupApplication} from './test-helper';

describe('PokemonController', () => {
  let app: PokedexApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  beforeEach(givenEmptyDatabase);

  after(async () => {
    await app.stop();
  });

  describe('GET pokemons/{id}', () => {
    it('finds the pokemon', async () => {
      const pokemon = await givenPokemon({id: '001'});

      const res = await client.get('/pokemons/001').expect(200);

      expect(res.body).to.be.eql(pokemon);
    });

    it('sends 404 when the pokemon cannot be found', async () => {
      await client.get('/pokemons/10023').expect(404);
    });
  });

  describe('GET pokemons/name/{name}', () => {
    it('finds the pokemon', async () => {
      const pokemon = await givenPokemon({name: 'Charmander'});

      const res = await client.get('/pokemons/name/Charmander').expect(200);

      expect(res.body).to.be.eql(pokemon);
    });

    it('sends 404 when the pokemon cannot be found', async () => {
      await client.get('/pokemons/name/Charmander').expect(404);
    });
  });
});
