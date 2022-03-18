const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const buscandoEspecie = employees.find((colaborador) => colaborador.id === id)
    .responsibleFor[0];
  const animal = species.find((especies) =>
    especies.id === buscandoEspecie).residents.sort((idadeA, idadeB) => idadeB.age - idadeA.age);
  return Object.values(animal[0]);
}

module.exports = getOldestFromFirstSpecies;
