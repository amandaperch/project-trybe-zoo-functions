const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const horas = (dia) => {
  const horasObj = hours[dia];
  const horario = `Open from ${horasObj.open}am until ${horasObj.close}pm`;
  return horario;
};
const exposicao = (dia) => {
  const todosAnimaisDoDia = species.filter((especie) => especie.availability.includes(dia));
  const nomeTodosAnimaisDoDia = todosAnimaisDoDia.map((animal) => animal.name);
  return nomeTodosAnimaisDoDia;
};

const programacaoDoDia = (dia) => {
  const agendaDoDia = {
    officeHour: horas(dia),
    exhibition: exposicao(dia),
  };
  if (dia === 'Monday') {
    agendaDoDia.officeHour = 'CLOSED';
    agendaDoDia.exhibition = 'The zoo will be closed!';
  }
  return agendaDoDia;
};

const obterDiaPorAnimal = (name) => species.find((animal) => animal.name === name).availability;

const programacaoSemanal = (semana) => {
  const todosDias = {};
  semana.forEach((dia) => { todosDias[dia] = programacaoDoDia(dia); });
  return todosDias;
};

function getSchedule(scheduleTarget) {
  const diasDaSemana = ['Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday', 'Monday'];
  const todosAnimais = species.map((animais) => animais.name);

  let programacao = {};

  if (diasDaSemana.includes(scheduleTarget)) {
    console.log('seja bem vindo');
    programacao[scheduleTarget] = programacaoDoDia(scheduleTarget);
  } else if (todosAnimais.includes(scheduleTarget)) {
    programacao = obterDiaPorAnimal(scheduleTarget);
  } else {
    programacao = programacaoSemanal(diasDaSemana);
  }

  return programacao;
}

module.exports = getSchedule;
