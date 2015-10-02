import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('hoard', params.hoard_id);
    // return this.store.findAll('hoard');
    // debugger;
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment',params);
      var hoard = params.hoard;
      hoard.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return hoard.save();
      });
      this.transitionTo('hoarded', params.hoard)
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('hoarded', params.hoarded_id);
    }
  }
});
