const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animaisName = species.find((nameAnimal) => nameAnimal.name === animal);
  return animaisName.residents.every((ageAnimal) => ageAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
