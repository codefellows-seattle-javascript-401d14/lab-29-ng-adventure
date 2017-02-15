'use strict';

const angular = require('angular');

angular.module('zombieApp')
.component('zombie', {
  template: `<div>
      <h1> Welcome to zombie adventure </h1>
      <console> </console>
    </div>`,
});
