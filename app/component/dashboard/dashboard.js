'use strict';

const angular = require('angular');

angular.module('resloveAdventureApp')
.component('dashboard', {
  template: require('./dashboard.html'),
  controllerAs: 'dashboardCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    this.$onInit = () => {
      this.player = playerService;
      this.direction = '';
      $log.log('dashboard component loaded');
    };
  }],
});
