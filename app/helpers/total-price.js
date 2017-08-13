import Ember from 'ember';

export function totalPrice(params/*, hash*/) {
	debugger;
       let ret = 0;
	  	params.forEach((item)=>{
	        ret =  ret + (parseInt(item.get("price")) * parseInt(item.get('quantity')));
	    });
	    
}

export default Ember.Helper.helper(totalPrice);
