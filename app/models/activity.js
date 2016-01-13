import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  linkUrl: DS.attr('string'),
  category: DS.attr('string'),
  team: DS.belongsTo('team'),

  pictureUrl: Ember.computed('category', function() {
    if (this.get('category')) {
      let name = Ember.String.dasherize(this.get('category'));

      return `${name}.jpg`;
    }
  }),
});
