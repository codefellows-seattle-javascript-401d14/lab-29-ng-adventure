'use strict';

require('./scss/base.scss');

const angular = require('angular');

angular.module('resloveAdventureApp', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/reslove/reslove.js');
require('./component/dashboard/dashboard.js');
require('./component/history/history.js');
