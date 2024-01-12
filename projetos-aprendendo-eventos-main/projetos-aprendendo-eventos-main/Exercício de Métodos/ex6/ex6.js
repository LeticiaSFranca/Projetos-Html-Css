const pokemons = [
  {
    id: 1,
    nome: 'Eevee',
    tipo: 'normal',
    registro: '133',
    CP: 300,
  },
  {
    id: 2,
    nome: 'Charmander',
    tipo: 'fire',
    registro: '004',
    CP: 500,
  },
  {
    id: 3,
    nome: 'Abra',
    tipo: 'psíquico',
    registro: '063',
    CP: 350
  }
];

// a) Aumentar o CP Máximo de todos os Pokemons em 50
pokemons.forEach(function(pokemon) {
  pokemon.CP += 50;
});

// b) Filtrar apenas os Pokemons do tipo 'fire'
var pokemonsCharmander = pokemons.filter(function(pokemon) {
  return pokemon.nome === 'Charmander';
});

// c) Procurar e exibir os dados do Pokemon com ID igual a 2
var pokemonSelecionado = pokemons.find(function(pokemon) {
  return pokemon.id === 2;
});

// d) Calcular a soma do CP de todos os Pokemons
var somaCP = pokemons.reduce(function(acumulador, pokemon) {
  return acumulador + pokemon.CP;
}, 0);

// Exibir os resultados usando alert
alert("Pokemons com CP atualizado: " + JSON.stringify(pokemons));
alert("Pokemons do tipo 'fire': " + JSON.stringify(pokemonsCharmander));
alert("Pokemon selecionado (ID = 2): " + JSON.stringify(pokemonSelecionado));
alert("Soma do CP de todos os Pokemons: " + somaCP);