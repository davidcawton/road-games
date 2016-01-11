import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  established: DS.attr('number'),
  totalWins: DS.attr('number'),
  totalLosses: DS.attr('number'),
  totalTies: DS.attr('number'),
  stadiumName: DS.attr('string'),
  owner: DS.attr('string'),
  coach: DS.attr('string'),
  coachWins: DS.attr('number'),
  coachLosses: DS.attr('number'),
  coachTies: DS.attr('number'),
  generalManager: DS.attr('string'),
  startPlayer: DS.attr('string'),
  description: DS.attr('string'),
  conference: DS.attr('string'),
  division: DS.attr('string'),

  games: DS.hasMany('game', {inverse: null}),

  imgUrl: Ember.computed('name', function() {
    let name = Ember.String.dasherize(this.get('name'));

    return `/team-logos/${name}.jpg`;
  }),

  totalRecord: Ember.computed('totalWins', 'totalLosses', 'totalTies', function() {
    let totalWins = this.get('totalWins');
    let totalLosses = this.get('totalLosses');
    let totalTies = this.get('totalTies');

    return totalWins + '-' + totalLosses + '-' + totalTies;
  }),

  coachRecord: Ember.computed('coachWins', 'coachLosses', 'coachTies', function() {
    let coachWins = this.get('coachWins');
    let coachLosses = this.get('coachLosses');
    let coachTies = this.get('coachTies');

    return coachWins + '-' + coachLosses + '-' + coachTies;
  }),
});
