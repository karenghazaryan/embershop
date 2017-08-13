import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateShop(name, id){

      this.get('store').findRecord('shop', id)
        .then(shop => {
           shop.set('name', name);
           shop.save().then(shop => {
             this.transitionToRoute('index')
           })
        }).catch(e => {
           console.log(e.errors);
        });
    }
  }
});
