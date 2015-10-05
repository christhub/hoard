import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  hoard: DS.belongsTo('hoard', {async: true}),
  date_added: DS.attr()
});
