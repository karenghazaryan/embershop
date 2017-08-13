import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['shop-items'],

	didReceiveAttrs(){
		 this._super(...arguments);
		 this.get('model.items').then(items => {
		 	let sum = 0;
		 	items.map(item=>{
		 		sum += item.get('price') * item.get('quantity')
		 		this.set('sumPrise', sum);
		 	})
	         
	    });
	},
	actions:{
		deleteItem(itemId){			
            this.get('onDelete')(itemId);
		},

		editItem(itemId){
			this.get('onEdit')(itemId);
		}
	}
});
