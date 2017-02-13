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


  map[roomA] = {
    desc: 'the Charles Babbage room',
    west: roomH,
  };

  map[roomB] = {
    desc: 'the Ada Lovelace room',
    east: roomO,
  };

  map[roomC] = {
    desc: 'the Alan Turing room',
    west: roomI,
  };

  map[roomD] = {
    desc: 'the Grace Hopper room',
    east: roomH,
  };

  map[roomE] = {
    desc: 'the conference room',
    east: roomI,
  };

  map[roomF] = {
    desc: 'the storage room',
    north: roomQ,
  };

  map[roomG] = {
    desc: 'the room of mystery',
    north: roomM,
  };

  map[roomH] = {
    desc: 'the shelves',
    east: roomA,
    west: roomD,
    south: roomJ,
  };

  map[roomI] = {
    desc: 'the unused tables',
    east: roomC,
    south: roomW,
  };

  map[roomJ] = {
    desc: 'the coworking area',
    north: roomH,
    east: roomQ,
    west: roomW,
    south: roomK,
  };

  map[roomK] = {
    desc: 'the study rooms',
    north: roomJ,
    east: roomL,
  };

  map[roomL] = {
    desc: 'Duncan\'s office',
    north: roomK,
  };

  map[roomM] = {
    desc: 'the staff tables',
    north: roomW,
    east: roomN,
    south: roomG,
  };

  map[roomN] = {
    desc: 'the back exit',
    north: roomV,
    east: roomU,
    west: roomM,
  };

  map[roomO] = {
    desc: 'the couches',
    east: roomP,
    west: roomB,
    south: roomQ,
  };

  map[roomP] = {
    desc: 'the fireplace',
    east: roomX,
    west: roomO,
    south: roomR,
  };

  map[roomQ] = {
    desc: 'the west atrium',
    north: roomO,
    east: roomR,
    west: roomJ,
    south: roomF,
  };

  map[roomR] = {
    desc: 'the east atrium',
    north: roomP,
    east: roomS,
    west: roomQ,
    south: roomT,
  };

  map[roomS] = {
    desc: 'the kitchen',
    north: roomX,
    west: roomR,
  };

  map[roomT] = {
    desc: 'the main entryway',
    north: roomR,
    east: roomY,
    west: roomC,
    south: roomU,
  };

  map[roomU] = {
    desc: 'the 3rd floor lobby',
    north: roomT,
    east: roomZ,
    west: roomN,
  };

  map[roomV] = {
    desc: 'the elevators',
    south: roomN,
  };

  map[roomW] = {
    desc: 'the sunny window tables',
    north: roomI,
    east: roomJ,
    west: roomE,
    south: roomM,
  };

  map[roomX] = {
    desc: 'the basketball game',
    west: roomP,
    south: roomS,
  };

  map[roomY] = {
    desc: 'Brandy\'s office',
    east: roomT,
  };

  map[roomZ] = {
    desc: 'the outside',
    north: roomZ,
    east: roomZ,
    west: roomU,
    south: roomZ,
  };

  return map;
});
