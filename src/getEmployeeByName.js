const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (colaborador) => colaborador.firstName === employeeName
    || colaborador.lastName === employeeName,
  );
}
module.exports = getEmployeeByName;
