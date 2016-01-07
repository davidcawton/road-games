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
  coachRecord: DS.attr('number'),
  generalManager: DS.attr('string'),
  startPlayer: DS.attr('string'),
  description: DS.attr('string'),
  conference: DS.attr('string'),
  division: DS.attr('string'),
  logo: DS.attr('string'),

  totalRecord: Ember.computed('totalWins', 'totalLosses', 'totalTies', function() {
    let totalWins = this.get('totalWins');
    let totalLosses = this.get('totalLosses');
    let totalTies = this.get('totalTies');

    return totalWins + '-' + totalLosses + '-' + totalTies;
  }),
});
