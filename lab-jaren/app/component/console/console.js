'use strict';

require('./_console.scss');

require('angular').module('cfudApp')
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
