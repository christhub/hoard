import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('hoard', params.hoard_id);
    // return this.store.findAll('hoard');
    // debugger;
  },
  // actions: {
  //   update(hoard, params) {
  //     this.sendAction('update', hoard, params);
  //   }
  // }
});
