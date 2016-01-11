import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveTeam(formData) {
      let data = Ember.getProperties(formData, [
        'name',
        'city',
        'established',
        'totalWins',
        'totalLosses',
        'totalTies',
        'stadiumName',
        'owner',
        'coach',
        'coachWins',
        'coachLosses',
        'coachTies',
        'generalManager',
        'startPlayer',
        'description',
        'conference',
        'division',
      ]);

      let team = this.modelFor(this.routeName);
      team.setProperties(data);
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
