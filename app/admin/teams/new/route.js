import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('team');
  },

  actions: {
    addNewTeam(formData) {
      let newTeam = this.store.createRecord('team');
      newTeam.setProperties(formData);
      newTeam.save().then(() => {
        this.transitionTo('admin.teams');
      });
    },
  },
});
