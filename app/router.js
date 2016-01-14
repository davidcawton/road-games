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

    this.route('activities', function() {
      this.route('new');
      this.route('edit', {
        path: '/:activity_id/edit',
      });
      this.route('details', {
        path: '/:activity_id',
      });
    });
  });

  this.route('register');
  this.route('login');
  this.route('authenticator');

  this.route('team-page', {
    path: '/teams/:team_id',
  }, function() {
    this.route('activities', {path: '/activities/:category'});
  });
});

export default Router;
