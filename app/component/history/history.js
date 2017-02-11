'use strict';

const angular = require('angular');

angular.module('resloveAdventureApp')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['playerService', function(playerService) {
    this.onInit = () => {
      this.player = playerService;
    };
  }],
});
