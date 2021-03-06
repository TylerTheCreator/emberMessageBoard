import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  description: DS.attr(),
  answer: DS.belongsTo('answer', { async: true })
});
