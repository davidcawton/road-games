import DS from 'ember-data';
import config from 'road-games/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  shouldReloadAll() {
    return true;
  },

  host: config.apiHost,

  namespace: 'api',
});
