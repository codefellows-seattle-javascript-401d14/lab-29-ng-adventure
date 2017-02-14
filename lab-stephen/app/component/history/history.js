'use strict';

require('angular').module('zombieApp')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['playerService', function(playerService){
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
