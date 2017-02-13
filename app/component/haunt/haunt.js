'use strict';

const angular = require('angular');

angular.module('hauntedApp')
.component('haunt', {
  template: `<div>
    <h2> Trapped in a Haunted House</h2>
    <p> You must navigate your way through the house, </p>
    <p> and run away from the <b>Ghost</b></p>
    <console></console>
    <history></history>
  </div>`,
});
