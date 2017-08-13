import Ember from 'ember';

export default Ember.Route.extend({

	

	model(params){  

		// return this.get('store').findRecord('shop', params.id);

		let shop =  this.get('store').findRecord('shop', params.id).then(result=>{
			let sum = result.get('sumPrice').then(price=>{
				result.set('sumPrice',price);
			})
		
		})

		// let shop  =this.get('store').findRecord('shop', params.id);
		return Ember.RSVP.hash({
			shop:shop
		})
		
	},

	setupController (controller, models) {
		 this._super(...arguments);
		 debugger;
      controller.set('shop' , models.shop);
    }
 
});
