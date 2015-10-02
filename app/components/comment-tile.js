import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  destroyComment(comment) {
    console.log('hello');
    this.sendAction('destroyComment', comment);
  }  
}
});
