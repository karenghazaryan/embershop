import Ember from 'ember';

export default Ember.Component.extend({
   classNames: ['create-shop'],
   actions:{
   	
	   	createItem(name, price, quantity, shopId){	
            if(!name || this.get('hasErrorName')){
            	this.set('hasErrorName',true)
            }else if(!price ||  this.get('hasErrorPrice')){
            	this.set('hasErrorPrice',true)
            }else if(!quantity || this.get('hasErrorQuantity')){
            	this.set('hasErrorQuantity',true)
            }else{

	       this.get('onSave')(name, price, quantity, shopId);
            }
	       
	   	},

	   	updateItem(name, price, quantity, itemId, shopId){	  
	   	 		debugger;
	   		 this.get('onSave')(name, price, quantity, itemId, shopId)
	   	},

	   	validate(value,e){		
		      switch(e.currentTarget.name){
		      	case 'name':
                   this.set('hasErrorName',!value)
		      	  break;
		      	case 'quantity':
		      	  this.set('hasErrorQuantity',(!value || isNaN(parseFloat(value)) || !isFinite(value)))
		      	  break;

		      	case 'price':
		      	   this.set('hasErrorPrice',(!value ||  isNaN(parseFloat(value)) || !isFinite(value)))
		      	  break;
		      	
		      }              
			
		}
   }

});
