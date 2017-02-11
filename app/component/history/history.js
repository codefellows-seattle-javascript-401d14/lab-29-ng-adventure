'use strict';

require('./_history.scss');

require('angular').module('saltMachineApp')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['playerService', function(playerService){
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
