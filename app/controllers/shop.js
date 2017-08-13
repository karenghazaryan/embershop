import Ember from 'ember';

export default Ember.Controller.extend({  
  actions : {
	    createShop(name){

	      let shop = this.get('store').createRecord('shop', {
	        name: name
	      });
	      shop.save().then(resul =>{
	      	this.transitionTo('index')
	      })
		  .catch(e => {
		    console.log(e.errors);
		  });      
	    },
	    
	    deleteItem(itemId){
           	this.store.findRecord('item', itemId).then(function(item) {
			  item.destroyRecord(); // => DELETE to /posts/2
			})
		}
    }

});
