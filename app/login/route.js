import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    loginUser({email, password}) {
      this.get('session').authenticate('authenticator:application', email, password).catch((reason) => {
        console.log(reason);
      });
      this.transitionTo('admin');
    },

    logout() {
      this.get('sesson').invalidate();
    },
  },
});
