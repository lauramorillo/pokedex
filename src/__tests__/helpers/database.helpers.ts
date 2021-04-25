import {Pokemon} from '../../models';
import {PokemonRepository} from '../../repositories';
import {testPokemon} from '../fixtures/datasources/testpokemon.datasource';
import {POKEMON_BASE} from './pokemon_base';

function getPokemonRepository() {
  return new PokemonRepository(testPokemon);
}

export function givenPokemonData(data: Partial<Pokemon>) {
  return Object.assign(POKEMON_BASE, data);
}

export async function givenEmptyDatabase() {
  await getPokemonRepository().deleteAll();
}

export async function givenPokemon(data: Partial<Pokemon>) {
  const pokemon = givenPokemonData(data);
  await getPokemonRepository().create(pokemon);
  return pokemon;
}
