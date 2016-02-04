import Ember from 'ember';

export default Ember.Component.extend({
  isToggled: false,

  click() {
    this.toggleProperty('isToggled');
  },
});
