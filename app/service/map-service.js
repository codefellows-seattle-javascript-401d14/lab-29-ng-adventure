'use strict';

const angular = require('angular');

angular.module('reApp')
.service('mapService', function() {
  let map = {};

  let roomA = 'ROOM_A';
  let roomB = 'ROOM_B';
  let roomC = 'ROOM_C';
  let roomD = 'ROOM_D';
  let roomE = 'ROOM_E';
  let roomF = 'ROOM_F';

  map[roomA] = {
    desc: 'basement room 1',
    east: roomB,
    south: roomC,
  };

  map[roomB] = {
    desc: 'basement room 2',
    west: roomA,
    south: roomD,
  };

  map[roomC] = {
    desc: 'guardhouse',
    east: roomD,
    north: roomA,
    south: roomF,
  };

  map[roomD] = {
    desc: 'laboratory',
    west: roomC,
    north: roomB,
    south: roomE,
  };

  map[roomE] = {
    desc: 'courtyard',
    east: roomF,
    north: roomD,
  };
  map[roomF] = {
    desc: 'mansion level 1',
    west: roomE,
    north: roomC,
  };
  return map;



});
