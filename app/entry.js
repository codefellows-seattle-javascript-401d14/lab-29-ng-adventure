'use strict';

require('./scss/base.scss');

const angular = require('angular');

angular.module ('museumApp', []);

// require services
require('./service/museumlayoutmap-service.js');
require('./service/visitor-service.js');

// require component
require('./component/console/console.js');
require('./component/history/history.js');
