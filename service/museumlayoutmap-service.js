'use strict';

const angular = require('angular');

angular.module('museumApp')
.service('mapLayout', function (){

  let map = {};

  let roomA = 'Lobby';
  let roomB = 'ComtemporaryArt';
  let roomC = 'GreekArt';
  let roomD = 'EuropeanArt';
  let roomE = 'AfricanArt';
  let roomF = 'AsianArt';

  map[roomA] = {
    desc: 'Lobby of Museum',
    east: roomB,
    south: roomF,
  };

  map[roomB] = {
    desc: 'ComtemporaryArt',
    east: roomC,
    south: roomE,
    west: roomA,
  };

  map[roomC] = {
    desc: 'GreekArt',
    west: roomB,
  };

  map[roomD] = {
    desc: 'EuropeanArt',
    north: roomF,
  };

  map[roomE] = {
    desc: 'AfricanArt',
    north: roomB,
    west: roomF,
  };

  map[roomF] = {
    desc: 'AsianArt',
    north: roomA,
    east: roomE,
    south: roomD,
  };


});
