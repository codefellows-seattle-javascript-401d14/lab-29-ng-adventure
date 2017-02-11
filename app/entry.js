'use strict';

require('./scss/base.scss');

const angular = require('angular');

angular.module('resloveAdventureApp', []);

require('./service/map-service.js');

require('./component/adventure/adventure.js');
