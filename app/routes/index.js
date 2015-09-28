import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hoard');
  },

  actions: {
    destroyHoard(hoard) {
      hoard.destroyRecord();
      this.transitionTo('index');
    },
    save3(params) {
      var newHoard = this.store.createRecord('hoard',params);
      newHoard.save();
      this.transitionTo('index');
    },
    update(hoard, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          hoard.set(key,params[key]);
        }
      });
      // debugger;
      hoard.save();
      this.transitionTo('index');
    },
  }
});
