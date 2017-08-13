import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		updateItem(name, price, quantity, itemId, shopId){
			debugger;
	            this.store.findRecord('item', itemId)
	            .then(item=>{
	            	item.set('name',name);
	            	item.set('price',price);
	            	item.set('quantity',quantity)
	            	item.save().then(result=>{
	            		this.transitionToRoute('shop.show',shopId)
	            	})
	            })
			}
	}
	
});
