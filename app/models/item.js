import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  name : DS.attr('string'),
  quantity:DS.attr('number'),
  shop : DS.belongsTo('shop')
});
