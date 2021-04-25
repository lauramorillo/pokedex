import {juggler} from '@loopback/repository';

export const testPokemon: juggler.DataSource = new juggler.DataSource({
  name: 'pokedex',
  connector: 'mongodb',
  url: '',
  host: 'mongo-test',
  port: process.env.MONGO_PORT,
  user: '',
  password: '',
  database: 'pokedex',
  useNewUrlParser: true,
});
