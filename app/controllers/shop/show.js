import Ember from 'ember';

export default Ember.Controller.extend({    

    

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
