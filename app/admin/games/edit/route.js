import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    saveGame(formData) {
      let game = this.modelFor(this.routeName);
      game.setProperties(formData);
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
