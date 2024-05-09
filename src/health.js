// Чистые функции

const indicators = {
  green: {
    percents: 50,
    color: 'green',
    stateOfHelth: 'healthy',
  },
  yellow: {
    percents: 15,
    color: 'yellow',
    stateOfHelth: 'wounded',
  },
  red: {
    percents: 0,
    color: 'red',
    stateOfHelth: 'critical',
  },
};

export default function stateOfHelth(hero) {
  if (hero.health > indicators.green.percents) { return indicators.green.stateOfHelth; }
  if (hero.health >= indicators.yellow.percents) { return indicators.yellow.stateOfHelth; }
  return indicators.red.stateOfHelth;
}
