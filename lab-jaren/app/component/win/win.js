'use strict';

require('./_win.scss');

require('angular').module('cfudApp')
.component('win', {
  template: require('./win.html'),
  controllerAs: 'winCtrl',
  controller: ['playerService', function(playerService) {
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
