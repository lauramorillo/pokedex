import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab';
import {PokedexApplication} from '../..';
import {testPokemon} from '../fixtures/datasources/testpokemon.datasource';

export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    port: 3001,
  });

  const app = new PokedexApplication({
    rest: restConfig,
  });

  await app.boot();
  app.dataSource(testPokemon);
  await app.start();

  const client = createRestAppClient(app);
  return {app, client};
}

export interface AppWithClient {
  app: PokedexApplication;
  client: Client;
}
