import DS from 'ember-data';

export default DS.Model.extend({
  teamName: DS.attr('string'),
  teamCity: DS.attr('string'),
  teamDescription: DS.attr('string'),
  teamConference: DS.attr('string'),
  teamDivision: DS.attr('string'),
});
