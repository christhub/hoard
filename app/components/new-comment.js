import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    hoardFormControlPlus () {
      this.set('addNewComment', true);
    },

    hoardFormControlDown () {
      this.set('addNewComment', false);
    },

    saveComment() {
        console.log("SAVE COMMENT NEW COMMENT COMPONENT");
        var params = {
          title: this.get('title'),
          text: this.get('text'),
          hoard: this.get('hoard'),
          timestamp: new Date(),
        };
        this.set('addNewComment', false),
        this.sendAction('saveComment', params);
        // debugger;
    }
  }
});
