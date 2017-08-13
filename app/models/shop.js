import DS from 'ember-data';

export default DS.Model.extend({  
  name: DS.attr('string'),
  items: DS.hasMany('item',{ async: true }),

  sumPrice : Ember.computed('items,@each.price,@each.quantity',function (argument) {

  	    const promise = this.get('items').then(items => {
  	    	               
	    	                const prices = items.map(item => item.get('price') * item.get('quantity') );
					  		// items.forEach((item)=>{
					    //     ret =  ret + (parseInt(item.get("price")) * parseInt(item.get('quantity')));
	    				
						    return Ember.RSVP
						      .all(prices)
						      .then(prices => prices.reduce((carry, price) => carry + price, 0));
						});
  	     return DS.PromiseObject.create({promise});
	    
	    })


});
