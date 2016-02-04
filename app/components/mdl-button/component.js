import Button from 'ember-material-lite/components/mdl-button';

export default Button.extend({
  click(event) {
    this.sendAction('action', this, event);
    this.sendAction('on-click', this, event);
  },
});
