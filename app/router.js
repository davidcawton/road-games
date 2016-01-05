import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('teams');
  this.route('admin', function() {
    this.route('teams', function() {
      this.route('new');
    });
  });
});

export default Router;
