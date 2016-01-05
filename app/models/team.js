import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  description: DS.attr('string'),
  conference: DS.attr('string'),
  division: DS.attr('string'),
});
