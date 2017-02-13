'use strict';

require('./scss/base.scss');

const angular = require('angular');
angular.module('cfudApp', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./component/game/game.js');
require('./component/console/console.js');
require('./component/history/history.js');
require('./component/win/win.js');
