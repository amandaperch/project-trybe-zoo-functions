const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const criancas = entrants.filter((entrant) => entrant.age < 18).length;
  const adulto = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const idosos = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: criancas, adult: adulto, senior: idosos };
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
