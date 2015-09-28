import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
    hoardOpen: false,
  // actions: {
  //   hoardFormControlPlus () {
  //     this.set('hoardOpen', true);
  //   },
  //
  //   hoardFormControlDown () {
  //     this.set('hoardOpen', false);
  //   },
  //   save3(params) {
  //     var newHoard = this.store.createRecord('hoard',params);
  //     newHoard.save();
  //     this.transitionTo('index');
  //   },
  // }
});
