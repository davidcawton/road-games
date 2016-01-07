import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      teams: this.store.findAll('team'),
    });
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
