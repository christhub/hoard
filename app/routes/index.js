import Ember from 'ember';

// var hoards = [{
//   id: 1,
//   name: "Veruca Salt",
//   city: "San Francisco",
//   type: "Estate",
//   bedrooms: 15,
//   image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
// }, {
//   id: 2,
//   name: "Mike TV",
//   city: "Seattle",
//   type: "Condo",
//   bedrooms: 1,
//   image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
// }, {
//   id: 3,
//   name: "Violet Beauregarde",
//   city: "Portland",
//   type: "Apartment",
//   bedrooms: 3,
//   image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
// }];

export default Ember.Route.extend({
  model() {
    // return hoards;
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
    }

  }
});
