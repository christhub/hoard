import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    hoardFormControlPlus () {
      this.set('updateHoard', true);
    },

    hoardFormControlDown () {
      this.set('updateHoard', false);
    },

    update(hoard) {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        answer: this.get('answer'),
      };
      this.set('updateHoard', false);
      this.sendAction('update', hoard, params);
    }
  }
});
