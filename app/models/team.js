import DS from 'ember-data';
import Ember from 'ember';
import getColors from '../color';

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
  coachWins: DS.attr('string', {defaultValue: 0}),
  coachLosses: DS.attr('string', {defaultValue: 0}),
  coachTies: DS.attr('string', {defaultValue: 0}),
  generalManager: DS.attr('string'),
  startPlayer: DS.attr('string'),
  description: DS.attr('string'),
  conference: DS.attr('string'),
  division: DS.attr('string'),
  airport: DS.attr('string'),

  games: DS.hasMany('game', {inverse: null}),
  activities: DS.hasMany('activity', {inverse: null}),

  teamColors: Ember.computed('name', function() {
    if (this.get('name')) {
      let name = Ember.String.dasherize(this.get('name'));

      return getColors(name);
    }
  }),

  imgUrl: Ember.computed('name', function() {
    if (this.get('name')) {
      let name = Ember.String.dasherize(this.get('name'));

      return `/helmets/${name}.jpg`;
    }
  }),

  teamLogo: Ember.computed('name', function() {
    if (this.get('name')) {
      let name = Ember.String.dasherize(this.get('name'));

      return `/team-logos/${name}.png`;
    }
  }),

  wordMark: Ember.computed('name', function() {
    if (this.get('name')) {
      let name = Ember.String.dasherize(this.get('name'));

      return `/word-marks/${name}.jpg`;
    }
  }),

  stadiumImg: Ember.computed('stadiumName', function() {
    if (this.get('stadiumName')) {
      let name = Ember.String.dasherize(this.get('stadiumName').trim());
      return `/stadiums/${name}.jpg`;
    }
  }),

  stadiumMap: Ember.computed('stadiumName', function() {
    if (this.get('stadiumName')) {
      let name = Ember.String.dasherize(this.get('stadiumName').trim());
      return `/stadium-maps/${name}.jpg`;
    }
  }),

  citySkyline: Ember.computed('city', function() {
    if (this.get('city')) {
      let name = Ember.String.dasherize(this.get('city').trim());
      return `/skylines/${name}.jpg`;
    }
  }),

  conferenceImg: Ember.computed('conference', function() {
    let name = Ember.String.dasherize(this.get('conference').trim());
    return `${name}.png`;
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
