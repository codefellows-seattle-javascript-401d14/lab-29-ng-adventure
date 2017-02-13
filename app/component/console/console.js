'use strict';

require('angular').module('museumApp')
.component('console', {
  template: require('./console.html'),
  controllerAs: 'consoleCtrl',
  controller: ['visitorService', function(visitorService) {
    this.$onInit = () => {
      this.visitor = visitorService;
      this.direction = '';
      console.log('lulwat');
    };
  }],
});
