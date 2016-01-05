import Ember from 'ember';


export default Ember.Route.extend({

  actions: {
    saveTeam(formData) {
      let newTeam = this.store.modelFor('team');
      newTeam.setProperties(formData);
      newTeam.save().then(() => {
        this.transitionTo('admin.team.details');
      });
    },
  },
});
