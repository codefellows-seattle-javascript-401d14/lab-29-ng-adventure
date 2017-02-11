'use strict';

const angular = require('angular');

angular.module('saltMachineApp')
.service('mapService', function(){
  let map = {};

  let saltRoomA = 'SALTROOM_A';
  let saltRoomB = 'SALTROOM_B';
  let saltRoomC = 'SALTROOM_C';
  let saltRoomD = 'SALTROOM_D';
  let saltRoomE = 'SALTROOM_E';
  let saltRoomF = 'SALTROOM_F';
  let saltRoomG = 'SALTROOM_G';

  map[saltRoomA] = {
    desc: 'salt machine headquarters',
    east: saltRoomB,
    south: saltRoomC,
  };

  map[saltRoomB] = {
    desc: 'salty saloon',
    west: saltRoomA,
    south: saltRoomD,
  };

  map[saltRoomC] = {
    desc: 'salt lake city',
    north: saltRoomA,
    east: saltRoomD,
    south: saltRoomC,
    west: saltRoomC,
  };

  map[saltRoomD] = {
    desc: 'sodium chloride diner',
    north: saltRoomB,
    west: saltRoomC,
    south: saltRoomE,
  };

  map[saltRoomE] = {
    desc: 'salty slap palace',
    north: saltRoomA,
    east: saltRoomD,
    south: saltRoomF,
    west: saltRoomC,
  };

  map[saltRoomF] = {
    desc: 'salty sauce showroom',
    north: saltRoomA,
    east: saltRoomD,
    south: saltRoomC,
    west: saltRoomG,
  };

  map[saltRoomG] = {
    desc: 'sultan of salts throne',
    north: saltRoomA,
    east: saltRoomD,
    south: saltRoomC,
    west: saltRoomC,
  };
  return map;
});
