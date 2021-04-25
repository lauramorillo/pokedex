import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'pokedex',
  connector: 'mongodb',
  url: '',
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  user: '',
  password: '',
  database: 'pokedex',
  useNewUrlParser: true
};

@lifeCycleObserver('datasource')
export class PokedexDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'pokedex';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.pokedex', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
