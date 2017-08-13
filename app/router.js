import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shop', function() {
    this.route('new');
    this.route('edit',{path:'/edit/:id'});
    this.route('show', {path :'/:id'});
    this.route('new-item',{path : '/:id/item/new'});
    this.route('edit-item',{path : '/item/edit/:id'});
  });  
});

export default Router;
