'use strict';

const angular = require('angular');

const resloveAdventureApp = angular.module('resloveAdventureApp');

console.log('reslove component loaded');
resloveAdventureApp.component('reslove', {
  template: require('./reslove.html'),
});
