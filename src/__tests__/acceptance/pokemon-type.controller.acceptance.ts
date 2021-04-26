import {Client, expect} from '@loopback/testlab';
import {PokedexApplication} from '../..';
import {PokemonType} from '../../models/pokemon-type';
import {setupApplication} from './test-helper';

describe('PokemonController', () => {
  let app: PokedexApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('GET pokemon-types', () => {
    it('gets the list of available types', async () => {
      const res = await client.get('/pokemon-types').expect(200);

      expect(res.body).to.be.eql(Object.values(PokemonType));
    });
  });
});
