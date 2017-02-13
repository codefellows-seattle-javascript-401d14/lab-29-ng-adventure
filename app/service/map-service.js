'use strict';

const angular = require('angular');

angular.module('hauntedApp')
.service('mapService', function(){

  let map = {};

  let roomA = 'ROOM_A';
  let roomB = 'ROOM_B';
  let roomC = 'ROOM_C';
  let roomD = 'ROOM_D';
  let roomE = 'ROOM_E';
  let roomF = 'ROOM_F';
  let roomG = 'ROOM_G';
  let roomH = 'ROOM_H';

  map[roomA] = {
    desc:'entry way',
    north: roomE,
    west: roomB,
    east: roomH,
  };

  map[roomB] = {
    desc:'chamber of horrors',
    north: roomD,
    west: roomC,
    east: roomA,
  };

  map[roomC] = {
    desc:'devil'/'s den',
    north: roomG,
    south: roomF,
    east: roomB,
  };

  map[roomD] = {
    desc:'the hall of secrets',
    south: roomB,
    north: roomG,
    east: roomB,
  };

  map[roomE] = {
    desc:'the dungeon of terror',
    north: roomF,
    south: roomA,
    east: roomD,
  };

  map[roomF] = {
    desc:'the garden of missing souls',
    north: roomC,
    west: roomH,
    east: roomG,
    south: roomE,
  };

  map[roomG] = {
    desc:'room of darkness',
    north: roomD,
    south: roomC,
    east: roomF,
  };

  map[roomH] = {
    desc:'hall of no return',
    south: roomF,
    west: roomA,
  };

  return map;
});
