import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let team = this.modelFor('team-page');

    return Ember.RSVP.hash({
      team,
      activities: this.store.query('activity', {team: team.id, category: 'City'}),
    });
  },
});
