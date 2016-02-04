import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      game: this.store.createRecord('game'),
      teams: this.store.findAll('team'),
    });
  },

  actions: {
    addNewGame(formData) {
      let newGame = this.modelFor(this.routeName).game;

      newGame.setProperties(Ember.getProperties(formData, 'date', 'homeScore', 'awayScore'));
      newGame.save().then(() => {
        this.transitionTo('admin.games');
      });
    },
  },
});
