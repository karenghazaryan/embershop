import Ember from 'ember';

export default Ember.Component.extend({
 classNames: ['create-shop'],
	actions:{
		createShop(name){	
		   if(name && !this.get('isError'))		{

            this.get('onSave')(name);

		   } else {
		   	this.set('isError',true)
		   }

		},
		updateShop(name, id){
			if(name && !this.get('isError'))		{

            this.get('onSave')(name, id);

		   } else {
		   	this.set('isError',true)
		   }
		},

		validate(name){	
		      
              this.set('isError',!name)
			
		}
	}
});
