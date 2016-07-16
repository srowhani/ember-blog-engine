import Ember from 'ember';

export default Ember.Controller.extend({
  blog: Ember.inject.service('blog-data'),
  actions: {
    post (title, body) {
      let blog = this.get('blog')
      blog.add(title, body)
      this.transitionToRoute('blog')
    }
  }
});
