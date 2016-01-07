import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('game');
  },

  actions: {
    addNewGame(formData) {
      let newGame = this.store.createRecord('game');
      newGame.setProperties(formData);
      newGame.save().then(() => {
        this.transitionTo('admin.games');
      });
    },
  },
});
