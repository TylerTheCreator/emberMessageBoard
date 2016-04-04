import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.attr(),
    description: DS.attr(),
    answers: DS.hasMany('answer', { async: true})

});
