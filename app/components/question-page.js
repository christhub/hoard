import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(hoard) {
      if (confirm('do you really want to delete this question?')){
        this.sendAction('destroyHoard', hoard);
      }
    },
    update(hoard, params) {
      this.sendAction('update', hoard, params);
    }
  }
});
