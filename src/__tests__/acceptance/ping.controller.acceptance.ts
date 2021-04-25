import {Client, expect} from '@loopback/testlab';
import {PokedexApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PingController', () => {
  let app: PokedexApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  describe('GET /ping', () => {
    it('receives OK with the application running', async () => {
      const res = await client.get('/ping').expect(200);
      expect(res.text).to.be.equal('OK');
    });
  });
});
