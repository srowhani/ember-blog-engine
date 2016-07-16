import Ember from 'ember';

export default Ember.Service.extend({
  user: null,

  init() {
    this._super(...arguments);
    this.user = 'Test User';
  }
});
