const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const contador = () => species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const buscador = (animal) => species
  .find((specie) => specie.name === (animal.specie)).residents;

const sex = (animal) => buscador(animal)
  .filter((residents) => residents.sex === (animal.sex));

function countAnimals(animal) {
  if (animal === undefined) {
    return contador();
  }
  return animal.sex
    ? sex(animal).length
    : buscador(animal).length;
}

module.exports = countAnimals;
