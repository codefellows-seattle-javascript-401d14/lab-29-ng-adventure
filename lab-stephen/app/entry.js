'use strict';

const angular = require('angular');
angular.module('zombieApp', []);

require('./service/map-service.js');
require('./service/player-service.js');
require('./service/zombie-service.js');


require('./component/zombie-adventure/zombie-adventure.js');
require('./component/console/console.js');
require('./component/history/history.js');
