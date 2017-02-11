'use strict';

const angular = require('angular');

angular.module('resloveAdventureApp')
.component('dashboard', {
  template: require('./dashboard.html'),
  controllerAs: 'dashboardCtrl',
  controller: ['playerService', function(playerService) {
    this.$onInit = () => {
      this.player = playerService;
      this.direction = '';
    };
  }],
});
