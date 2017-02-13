'use strict';

const angular = require('angular');

angular.module('saltMachineApp')
.component('saltMachine', {
  template: `<div>
  <h1> run away from the salt machine </h1>
  <console> </console>
  <history> </history>
  </div>`,
  controllerAs: 'historyCtrl',
  controller: ['playerService', function(playerService){
    this.$onInit = () => {
      this.player = playerService;
    };
  }],
});
