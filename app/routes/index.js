import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		 this.get('store').findAll('item');
		 return this.store.findAll('shop');
	},

	actions:{
		deleteShop(id){
			debugger;
			this.store.findRecord('shop', id, { backgroundReload: false }).then(function(shop) {
			  
			  var deletions = shop.get('items').map(item=>{
			  	return item.destroyRecord();
			  })

			  Ember.RSVP.all(deletions)
				  .then(function() {
				  return shop.destroyRecord();
				})

			})

		},

	}
});
