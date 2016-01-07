import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  homeTeam: DS.belongsTo('team'),
  awayTeam: DS.belongsTo('team'),
  winningTeam: DS.belongsTo('team'),
  homeScore: DS.attr('string'),
  awayScore: DS.attr('string'),
});
