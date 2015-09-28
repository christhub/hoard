import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hoarded', {path: 'hoarded/:hoard_id'});
});

export default Router;
