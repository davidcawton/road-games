import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      activity: this.store.findRecord('activity', params.activity_id),
      teams: this.store.findAll('team'),
    });
  },

  actions: {
    saveActivity(formData) {
      let activity = this.modelFor(this.routeName).activity;

      activity.setProperties(formData);
      activity.save().then(() => {
        this.transitionTo('admin.activities.details', activity);
      });
    },

    removeActivity(button, event) {
      event.preventDefault();

      let activity = this.modelFor(this.routeName).activity;
      activity.destroyRecord().then(() => {
        this.transitionTo('admin.activities');
      });
    },
  },
});
