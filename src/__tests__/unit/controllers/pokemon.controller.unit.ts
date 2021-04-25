import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor,
} from '@loopback/testlab';
import {PokemonController} from '../../../controllers';
import {Pokemon} from '../../../models';
import {PokemonRepository} from '../../../repositories';
import {givenPokemonData} from '../../helpers/database.helpers';

describe('PokemonController (unit)', () => {
  let repository: StubbedInstanceWithSinonAccessor<PokemonRepository>;
  beforeEach(givenStubbedRepository);

  describe('findById()', () => {
    it('returns the pokemon found', async () => {
      const controller = new PokemonController(repository);
      const pokemon = new Pokemon(givenPokemonData({}));
      repository.stubs.findById.resolves(pokemon);

      const details = await controller.findById('001');

      expect(details).to.containEql(pokemon);
      sinon.assert.calledWithMatch(repository.stubs.findById, '001');
    });
  });

  describe('findByName()', () => {
    it('returns the pokemon found', async () => {
      const controller = new PokemonController(repository);
      const pokemon = new Pokemon(givenPokemonData({}));
      repository.stubs.findByName.resolves(pokemon);

      const details = await controller.findByName('Charmander');

      expect(details).to.containEql(pokemon);
      sinon.assert.calledWithMatch(repository.stubs.findByName, 'Charmander');
    });
  });

  function givenStubbedRepository() {
    repository = createStubInstance(PokemonRepository);
  }
});
