import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  homeTeam: DS.belongsTo('team', {inverse: null}),
  awayTeam: DS.belongsTo('team', {inverse: null}),
  winningTeam: DS.belongsTo('team', {inverse: null}),
  homeScore: DS.attr('string'),
  awayScore: DS.attr('string'),
});
