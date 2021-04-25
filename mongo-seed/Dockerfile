FROM mongo

# Build with seed data for currency exchanges and publisher configs
COPY pokemons.json /pokemons.json

CMD mongoimport --host mongo --db pokedex --collection Pokemon --type json --file /pokemons.json --jsonArray
