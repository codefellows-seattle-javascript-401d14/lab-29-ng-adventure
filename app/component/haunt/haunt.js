'use strict';

const angular = require('angular');

angular.module('hauntedApp')
.component('haunt', {
  template: `<div>
    <h2> <span>Trapped</span> in a Haunted House</h2>
    <p> You must navigate your way through the house, </p>
    <p> and run away from the <b>Ghost</b>!</p>
    <p> Choose between these directions: north, south, east, west</p>
    <console></console>
    <history></history>
  </div>`,
});
