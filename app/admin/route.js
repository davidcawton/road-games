import Ember from 'ember';
let { RSVP } = Ember;

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),

  beforeModel() {
    return new RSVP.Promise((resolve, reject) => {
      let user = this.get('currentUser.user');
      if (!user) {
        this.transitionTo('index');
        return;
      }

      return user.then((user) => {
        if (Ember.get(user, 'isAdmin')) {
          return resolve();
        }

        // Make the user go to the login screen
        this.transitionTo('login');
        return reject();
      });
    });
  },
});
