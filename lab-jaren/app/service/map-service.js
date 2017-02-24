'use strict';

const angular = require('angular');

angular.module('cfudApp')
.service('mapService', function() {
  let map = {};
  let roomA = 'ROOM_A';
  let roomB = 'ROOM_B';
  let roomC = 'ROOM_C';
  let roomD = 'ROOM_D';
  let roomE = 'ROOM_E';
  let roomF = 'ROOM_F';
  let roomG = 'ROOM_G';
  let roomH = 'ROOM_H';
  let roomI = 'ROOM_I';
  let roomJ = 'ROOM_J';
  let roomK = 'ROOM_K';
  let roomL = 'ROOM_L';
  let roomM = 'ROOM_M';
  let roomN = 'ROOM_N';
  let roomO = 'ROOM_O';
  let roomP = 'ROOM_P';
  let roomQ = 'ROOM_Q';
  let roomR = 'ROOM_R';
  let roomS = 'ROOM_S';
  let roomT = 'ROOM_T';
  let roomU = 'ROOM_U';
  let roomV = 'ROOM_V';
  let roomW = 'ROOM_W';
  let roomX = 'ROOM_X';
  let roomY = 'ROOM_Y';
  let roomZ = 'ROOM_Z';

  map.rooms = ['ROOM_B','ROOM_C','ROOM_D','ROOM_E','ROOM_F',
    'ROOM_G','ROOM_H','ROOM_I','ROOM_J','ROOM_K','ROOM_L',
    'ROOM_M','ROOM_N','ROOM_O','ROOM_P','ROOM_Q','ROOM_R',
    'ROOM_S','ROOM_T','ROOM_U','ROOM_V','ROOM_W','ROOM_X',
    'ROOM_Y','ROOM_Z',
  ];

  map.directions = ['north', 'south', 'east', 'west'];

  map[roomA] = {
    name: 'ROOM_A',
    desc: 'the Charles Babbage room',
    cover: 'behind the whiteboard',
    west: roomH,
  };

  map[roomB] = {
    name: 'ROOM_B',
    desc: 'the Ada Lovelace room',
    east: roomO,
  };

  map[roomC] = {
    name: 'ROOM_C',
    desc: 'the Alan Turing room',
    west: roomI,
  };

  map[roomD] = {
    name: 'ROOM_D',
    desc: 'the Grace Hopper room',
    east: roomH,
  };

  map[roomE] = {
    name: 'ROOM_E',
    desc: 'the conference room',
    cover: 'under the conference table',
    east: roomI,
  };

  map[roomF] = {
    name: 'ROOM_F',
    desc: 'the storage room',
    cover: 'behind a stack of boxes',
    north: roomQ,
  };

  map[roomG] = {
    name: 'ROOM_G',
    desc: 'the office of mystery',
    cover: 'behind the desk of mystery',
    north: roomM,
  };

  map[roomH] = {
    name: 'ROOM_H',
    desc: 'the shelves',
    east: roomA,
    west: roomD,
    south: roomJ,
  };

  map[roomI] = {
    name: 'ROOM_I',
    desc: 'the unused tables',
    cover: 'under a stack of tables',
    east: roomC,
    west: roomE,
    south: roomW,
  };

  map[roomJ] = {
    name: 'ROOM_J',
    desc: 'the coworking area',
    north: roomH,
    east: roomQ,
    west: roomW,
    south: roomK,
  };

  map[roomK] = {
    name: 'ROOM_K',
    desc: 'the study rooms',
    north: roomJ,
    east: roomL,
  };

  map[roomL] = {
    name: 'ROOM_L',
    desc: 'Duncan\'s office',
    cover: 'under Duncan\'s desk',
    west: roomK,
  };

  map[roomM] = {
    name: 'ROOM_M',
    desc: 'the staff tables',
    north: roomW,
    east: roomN,
    south: roomG,
  };

  map[roomN] = {
    name: 'ROOM_N',
    desc: 'the back exit',
    north: roomV,
    east: roomU,
    west: roomM,
  };

  map[roomO] = {
    name: 'ROOM_O',
    desc: 'the couches',
    cover: 'inside a couch',
    east: roomP,
    west: roomB,
    south: roomQ,
  };

  map[roomP] = {
    name: 'ROOM_P',
    desc: 'the fireplace',
    east: roomX,
    west: roomO,
    south: roomR,
  };

  map[roomQ] = {
    name: 'ROOM_Q',
    desc: 'the west atrium',
    north: roomO,
    east: roomR,
    west: roomJ,
    south: roomF,
  };

  map[roomR] = {
    name: 'ROOM_R',
    desc: 'the east atrium',
    north: roomP,
    east: roomS,
    west: roomQ,
    south: roomT,
  };

  map[roomS] = {
    name: 'ROOM_S',
    desc: 'the kitchen',
    cover: 'behind the fridge',
    north: roomX,
    west: roomR,
  };

  map[roomT] = {
    name: 'ROOM_T',
    desc: 'the main entryway',
    north: roomR,
    west: roomY,
    south: roomU,
  };

  map[roomU] = {
    name: 'ROOM_U',
    desc: 'the 3rd floor lobby',
    north: roomT,
    east: roomZ,
    west: roomN,
  };

  map[roomV] = {
    name: 'ROOM_V',
    desc: 'the elevators',
    south: roomN,
  };

  map[roomW] = {
    name: 'ROOM_W',
    desc: 'the sunny window tables',
    north: roomI,
    east: roomJ,
    south: roomM,
  };

  map[roomX] = {
    name: 'ROOM_X',
    desc: 'the basketball game',
    west: roomP,
    south: roomS,
  };

  map[roomY] = {
    name: 'ROOM_Y',
    desc: 'Brandy\'s office',
    east: roomT,
  };

  map[roomZ] = {
    name: 'ROOM_Z',
    desc: 'the outside',
    north: roomZ,
    east: roomZ,
    west: roomU,
    south: roomZ,
  };

  return map;
});
