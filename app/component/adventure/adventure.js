'use strict';

const angular = require('angular');

angular.module('reApp')
.component('adventure', {
  template: `<div>
      <h1> The mansion awaits </h1>
      <console> </console>
      <history> </history>
    </div>`,
});
