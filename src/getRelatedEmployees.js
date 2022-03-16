const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((gerentes) => gerentes.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return employees.filter((colaborador) => colaborador.managers.includes(managerId))
    .map((nomeColaborador) => `${nomeColaborador.firstName} ${nomeColaborador.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
