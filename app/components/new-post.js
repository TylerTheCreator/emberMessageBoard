import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    rentalFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        user: this.get('user'),
        description: this.get('description'),
        answers: this.get('answers'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
