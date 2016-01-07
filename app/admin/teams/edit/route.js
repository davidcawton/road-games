import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveTeam(formData) {
      let team = this.modelFor(this.routeName);
      team.setProperties(formData);
      team.save().then(() => {
        this.transitionTo('admin.teams.details', team);
      });
    },

    removeTeam() {
      let team = this.modelFor(this.routeName);
      team.destroyRecord().then(() => {
        this.transitionTo('admin.teams');
      });
    },
  },
});
