import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      game: this.store.findRecord('game', params.game_id),
      teams: this.store.findAll('team'),
    });
  },

  actions: {
    saveGame(formData) {
      let game = this.modelFor(this.routeName).game;

      game.setProperties(Ember.getProperties(formData, 'date', 'homeScore', 'awayScore'));
      game.save().then(() => {
        this.transitionTo('admin.games.details', game);
      });
    },

    removeGame() {
      let game = this.modelFor(this.routeName);
      game.destroyRecord().then(() => {
        this.transitionTo('admin.games');
      });
    },
  },
});
