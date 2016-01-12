import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      activity: this.store.createRecord('activity'),
      teams: this.store.findAll('team'),
    });
  },

  actions: {
    addNewActivity(formData) {
      let newActivity = this.store.createRecord('activity');
      newActivity.setProperties(formData);
      newActivity.save().then(() => {
        this.transitionTo('admin.activities');
      });
    },
  },
});
