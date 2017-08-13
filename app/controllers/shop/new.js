import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		    createShop(name){	      
		      let shop = this.get('store').createRecord('shop', {
		        name: name
		      });
		      shop.save().then(resul =>{
		      	this.transitionToRoute('index')
		      })
			  .catch(e => {
			    console.log(e.errors);
			  });      
		    }
    }

});
