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
      let activity = this.modelFor(this.routeName).activity;

      activity.setProperties(formData);
      activity.save().then(() => {
        this.transitionTo('admin.activities');
      });
    },
  },
});
