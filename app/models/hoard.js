import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  answer: DS.attr(),
  comments: DS.hasMany('comment', {async: true }),
});
