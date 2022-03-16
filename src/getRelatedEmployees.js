const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((gerentes) => gerentes.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
