const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const localizacaoAnimal = () => {
  const objeto = {};
  species.forEach(({ location, name }) => {
    if (!objeto[location]) {
      objeto[location] = [];
    }
    objeto[location].push(name);
  });
  return objeto;
};

const filtro = (sorted, sex) => {
  const objeto = {};
  species.forEach(({ location, name, residents }) => {
    if (!objeto[location]) {
      objeto[location] = [];
    }
    let mapa = [...residents];
    if (sex) {
      mapa = mapa.filter((genero) => genero.sex === sex);
    }
    mapa = mapa.map((resident) => resident.nome);
    if (sorted) mapa.sort();
    objeto[location].push({ [name]: mapa });
  });
  return objeto;
};
function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) return filtro(sorted, sex);
  return localizacaoAnimal();
}

module.exports = getAnimalMap;
