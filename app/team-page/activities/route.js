import Ember from 'ember';

export default Ember.Route.extend({
  model({category}) {
    let team = this.modelFor('team-page');

    return Ember.RSVP.hash({
      activities: this.store.query('activity', {team: team.id, category}),
      category,
    });
  },
});
