'use strict';

require('angular').module('zombieApp')
.component('console', {
  template: require('./console.html'),
  controllerAs: 'consoleCtrl',
  controller: ['playerService', 'zombieService', function(playerService, zombieService){
    this.$onInit = () => {
      this.zombie = zombieService;
      this.player = playerService;
      this.direction = '';
    };
  }],
});
