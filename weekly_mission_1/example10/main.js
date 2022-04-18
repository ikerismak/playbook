import MyPokemon from './pokemon.js'


// al importar la clase puede tener cualquier nombre que tu le pongas siempre y cuando la exportes

const pikachu = new MyPokemon('Pikachu');
const bulbasaur = new MyPokemon("bulbasaur");
const squirtle = new MyPokemon("squirtle");
const charmander = new MyPokemon("charmander");


console.log('####################################');
console.log('');
pikachu.sayHello();
pikachu.sayMessage("Heey!");

bulbasaur.sayHello();
bulbasaur.sayMessage("Heey!");

charmander.sayHello();
charmander.sayMessage("Heey!");

squirtle.sayHello();
squirtle.sayMessage("Heey!");


console.log('');
console.log('####################################');



pikachu.sayHello();
pikachu.sayMessage("hey!!");