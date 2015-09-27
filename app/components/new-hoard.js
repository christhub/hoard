import Ember from 'ember';

export default Ember.Component.extend({
  addNewHoard: false,
  actions: {
    hoardFormControlPlus () {
      this.set('addNewHoard', true);
    },

    hoardFormControlDown () {
      this.set('addNewHoard', false);
    },

    save1() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        answer: this.get('answer'),
      };
      this.set('addNewHoard', false),
      this.sendAction('save2', params);
    }
  }
});
