'use strict';

const angular = require('angular');

angular.module('cfudApp')
.component('game', {
  template: require('./game.html'),
  controllerAs: 'gameCtrl',
  controller: ['playerService', function(playerService) {
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
