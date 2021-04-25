import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin, SchemaMigrationOptions} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import {customErrorMiddleware} from './middleware/custom-error.middleware';
import {Pokemon} from './models';
import {POKEMON_LIST} from './pokemons';
import {PokemonRepository} from './repositories';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class PokedexApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.sequence(MySequence);

    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
    this.middleware(customErrorMiddleware);

    this.projectRoot = __dirname;

    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }

  async migrateSchema(options?: SchemaMigrationOptions) {
    await super.migrateSchema(options);

    const pokemonRepo = await this.getRepository(PokemonRepository);
    const pokemonCount = await pokemonRepo.count();

    if (pokemonCount.count === 0) {
      await pokemonRepo.createAll(POKEMON_LIST as Pokemon[]);
    }
  }
}
