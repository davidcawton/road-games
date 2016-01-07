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

      this.route('details', {
        path: '/:team_id',
      });

      this.route('edit', {
        path: '/:team_id/edit',
      });
    });

    this.route('games', function() {
      this.route('new');

      this.route('edit', {
        path: '/:game_id/edit',
      });

      this.route('details', {
        path: '/:game_id',
      });
    });
  });

  this.route('register');
  this.route('login');
  this.route('authenticator');
});

export default Router;
