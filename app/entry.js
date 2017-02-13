'use strict';
require('./scss/base.scss');

const angular = require('angular');
angular.module('hauntedApp', []);

require('./service/map-service.js');

require('./service/player-service.js');

require('./component/haunt/haunt.js');
require('./component/console/console.js');
require('./component/history/history.js');
