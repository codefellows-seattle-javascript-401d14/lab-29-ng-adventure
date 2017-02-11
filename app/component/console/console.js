'use strict';

require('angular').module('saltMachineApp')
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
