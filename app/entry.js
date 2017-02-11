'use strict';

require('./scss/base.scss');

const angular = require('angular');
angular.module('saltMachineApp', []);
// config
// filters
// load the services
require('./service/map-service.js');
require('./service/player-service.js');
// directives
// load the components
require('./component/saltMachine/saltMachine.js');
require('./component/console/console.js');
require('./component/history/history.js');

// TODO: in future write a cool for loop for loading compoints
