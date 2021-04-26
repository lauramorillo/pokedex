import {expect} from '@loopback/testlab';
import {PokemonTypeController} from '../../../controllers';
import {PokemonType} from '../../../models/pokemon-type';

describe('PokemonController (unit)', () => {
  describe('listPokemonTypes()', () => {
    it('returns the pokemon type list', async () => {
      const controller = new PokemonTypeController();

      const details = controller.listPokemonTypes();

      expect(details).to.deepEqual(Object.values(PokemonType));
    });
  });
});
