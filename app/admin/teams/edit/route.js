import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveTeam(formData) {
      let newTeam = this.store.push('team');
      newTeam.setProperties(formData);
      newTeam.save().then(() => {
        this.transitionTo('admin.team.details');
      });
    },
  },
});
