'use strict';

require('./_lose.scss');

require('angular').module('cfudApp')
.component('lose', {
  template: require('./lose.html'),
  controllerAs: 'loseCtrl',
  controller: ['playerService', function(playerService) {
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
