import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['shop-items'],
	 
	actions:{
		deleteItem(itemId){			
            this.get('onDelete')(itemId);
		},

		editItem(itemId){
			this.get('onEdit')(itemId);
		}
	}
});
