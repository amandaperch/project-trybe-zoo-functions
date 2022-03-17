const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const criancas = entrants.filter((entrant) => entrant.age < 18).length;
  const adulto = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const idosos = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: criancas, adult: adulto, senior: idosos };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const contador = countEntrants(entrants);
  const totais = contador.child * prices.child + contador.adult * prices
    .adult + contador.senior * prices.senior;
  return totais;
}

module.exports = { calculateEntry, countEntrants };
