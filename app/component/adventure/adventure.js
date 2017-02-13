'use strict';

const angular = require('angular');

angular.module('reApp')
.component('adventure', {
  template: `<div>
  <h1>The Mansion awaits</>
  <console></console>
  <history></history>
  </div>`,
});
