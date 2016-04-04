import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        user: this.get('user'),
        description: this.get('description'),
        answers: this.get('answers'),

      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
