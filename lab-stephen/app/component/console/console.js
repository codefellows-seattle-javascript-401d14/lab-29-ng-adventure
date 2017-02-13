'use strict';

require('angular').module('zombieApp')
.component('console', {
  template: require('./console.html'),
  controllerAs: 'consoleCtrl',
  controller: ['playerService', function(playerService){
    this.$onInit = () => {
      this.player = playerService;
      this.direction = '';
    };
  }],
});
