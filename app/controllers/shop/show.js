import Ember from 'ember';

export default Ember.Controller.extend({

    init(){
 this._super( arguments );
    	this.get('shop');
    	debugger;
    },

    totalPrice:Ember.computed('shop.@each.items', function () {
    return this.shop.reduce((price, product,quantity) => {
    	debugger;
      var total = price + product.get('price');
      return total;
    }, 0);
}),
    

	actions : {
	    deleteItem(itemId){
           	this.store.findRecord('item', itemId).then(function(item) {
			  item.destroyRecord(); 
			})
		},


		

		editItem(itemId){
			this.transactionToRoute('edit-item',itemId);
		}
    }
});
