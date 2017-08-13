import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		createItem(name, price, quantity, shopId){
			
			let item = this.store.createRecord('item',{
				name:name,
				price:price,
				quantity:quantity
			});
			let shop = this.store.findRecord('shop', shopId).then(shop=>{	
			   shop.get('items').addObject(item);
			   item.save().then(item=> {
				  shop.save().then(shop => {
				  	this.transitionToRoute('shop.show',shopId)
				  })
				});
			});

		}
	}
});
