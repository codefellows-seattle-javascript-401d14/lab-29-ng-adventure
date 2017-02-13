'use strict';

require('angular').module('museumApp')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['visitorService', function(visitorService){
    this.$onInit = () => {
      this.visitor = visitorService;
    };
  }],
});
