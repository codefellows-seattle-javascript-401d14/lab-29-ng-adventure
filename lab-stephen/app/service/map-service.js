'use strict';

const angular = require('angular');

angular.module('zombieApp')
.service('mapService', function(){
  let map = {};

  let areaA = 'AREA_A';
  let areaB = 'AREA_B';
  let areaC = 'AREA_C';
  let areaD = 'AREA_D';
  let areaE = 'AREA_E';
  let areaF = 'AREA_F';
  let areaG = 'AREA_G';
  let areaH = 'AREA_H';
  let areaI = 'AREA_I';
  let areaJ = 'AREA_J';
  let areaK = 'AREA_K';
  let areaL = 'AREA_L';
  let areaM = 'AREA_M';
  let areaN = 'AREA_N';
  let areaO = 'AREA_O';
  let areaP = 'AREA_P';
  let areaQ = 'AREA_Q';
  let areaR = 'AREA_R';
  let areaS = 'AREA_S';
  let areaT = 'AREA_T';
  let areaU = 'AREA_U';
  let areaV = 'AREA_V';
  let areaW = 'AREA_W';
  let areaX = 'AREA_X';
  let areaY = 'AREA_Y';


  map[areaA] = {
    name: 'area A',
    desc: 'doorway',
    east: areaB,
    north: areaF,
    northEast: areaG,
    occupied: false,
    zombie: true,
  };

  map[areaB] = {
    name: 'area B',
    desc: 'nothing of interest',
    west: areaA,
    northWest: areaF,
    north: areaG,
    northEast: areaH,
    east: areaC,
    occupied: false,
    zombie: false,
  };

  map[areaC] = {
    name: 'area C',
    desc: 'nothing of interest',
    west: areaB,
    northWest: areaG,
    north: areaH,
    northEast: areaI,
    east: areaD,
    occupied: false,
    zombie: false,
  };

  map[areaD] = {
    name: 'area D',
    desc: 'nothing of interest',
    west: areaC,
    northWest: areaH,
    north: areaI,
    northEast: areaJ,
    east: areaE,
    occupied: false,
    zombie: false,
  };

  map[areaE] = {
    name: 'area E',
    desc: 'nothing of interest',
    west: areaD,
    northWest: areaI,
    north: areaJ,
    occupied: false,
    zombie: false,
  };

  map[areaF] = {
    name: 'area F',
    desc: 'nothing of interest',
    north: areaK,
    northEast: areaL,
    east: areaG,
    southEast: areaB,
    south: areaA,
    occupied: false,
    zombie: false,
  };

  map[areaG] = {
    name: 'area G',
    desc: 'nothing of interest',
    west: areaF,
    northWest: areaK,
    north: areaL,
    northEast: areaM,
    east: areaH,
    southEast: areaC,
    south: areaB,
    southWest: areaA,
    occupied: false,
    zombie: false,
  };

  map[areaH] = {
    name: 'area H',
    desc: 'nothing of interest',
    west: areaG,
    northWest: areaL,
    north: areaM,
    northEast: areaN,
    east: areaI,
    southEast: areaD,
    south: areaC,
    southWest: areaB,
    occupied: false,
    zombie: false,
  };

  map[areaI] = {
    name: 'area I',
    desc: 'nothing of interest',
    west: areaH,
    northWest: areaM,
    north: areaN,
    northEast: areaO,
    east: areaJ,
    southEast: areaE,
    south: areaD,
    southWest: areaC,
    occupied: false,
    zombie: false,
  };

  map[areaJ] = {
    name: 'area J',
    desc: 'nothing of interest',
    west: areaI,
    northWest: areaN,
    north: areaO,
    south: areaE,
    southWest: areaD,
    occupied: false,
    zombie: false,
  };

  map[areaK] = {
    name: 'area K',
    desc: 'nothing of interest',
    north: areaP,
    northEast: areaQ,
    east: areaL,
    southEast: areaG,
    south: areaF,
    occupied: false,
    zombie: false,
  };

  map[areaL] = {
    name: 'area L',
    desc: 'nothing of interest',
    west: areaK,
    northWest: areaP,
    north: areaQ,
    northEast: areaR,
    east: areaM,
    southEast: areaH,
    south: areaG,
    southWest: areaF,
    occupied: false,
    zombie: false,
  };

  map[areaM] = {
    name: 'area M',
    desc: 'player starting area',
    west: areaL,
    northWest: areaQ,
    north: areaR,
    northEast: areaS,
    east: areaN,
    southEast: areaI,
    south: areaH,
    southWest: areaG,
    occupied: true,
    zombie: false,
  };

  map[areaN] = {
    name: 'area N',
    desc: 'nothing of interest',
    west: areaM,
    northWest: areaR,
    north: areaS,
    northEast: areaT,
    east: areaO,
    southEast: areaJ,
    south: areaI,
    southWest: areaH,
    occupied: false,
    zombie: false,
  };

  map[areaO] = {
    name: 'area O',
    desc: 'nothing of interest',
    west: areaN,
    northWest: areaS,
    north: areaT,
    south: areaJ,
    southWest: areaI,
    occupied: false,
    zombie: false,
  };

  map[areaP] = {
    name: 'area P',
    desc: 'nothing of interest',
    north: areaU,
    northEast: areaV,
    east: areaQ,
    south: areaL,
    southWest: areaK,
    occupied: false,
    zombie: false,
  };

  map[areaQ] = {
    name: 'area Q',
    desc: 'nothing of interest',
    west: areaP,
    northWest: areaU,
    north: areaV,
    northEast: areaW,
    east: areaR,
    southEast: areaM,
    south: areaL,
    southWest: areaK,
    occupied: false,
    zombie: false,
  };

  map[areaR] = {
    name: 'area R',
    desc: 'nothing of interest',
    west: areaQ,
    northWest: areaV,
    north: areaW,
    northEast: areaX,
    east: areaS,
    southEast: areaN,
    south: areaM,
    southWest: areaL,
    occupied: false,
    zombie: false,
  };

  map[areaS] = {
    name: 'area S',
    desc: 'nothing of interest',
    west: areaR,
    northWest: areaW,
    north: areaX,
    northEast: areaY,
    east: areaT,
    southEast: areaO,
    south: areaN,
    southWest: areaM,
    occupied: false,
    zombie: false,
  };

  map[areaT] = {
    name: 'area T',
    desc: 'nothing of interest',
    west: areaS,
    northWest: areaX,
    north: areaY,
    south: areaO,
    southWest: areaN,
    occupied: false,
    zombie: false,
  };

  map[areaU] = {
    name: 'area U',
    desc: 'sword in corner',
    east: areaV,
    southEast: areaQ,
    south: areaP,
    occupied: false,
  };

  map[areaV] = {
    name: 'area V',
    desc: 'nothing of interest',
    west: areaU,
    east: areaW,
    southEast: areaR,
    south: areaQ,
    southWest: areaP,
    occupied: false,
    zombie: false,
  };

  map[areaW] = {
    name: 'area W',
    desc: 'nothing of interest',
    west: areaV,
    east: areaX,
    southEast: areaS,
    south: areaR,
    southWest: areaQ,
    occupied: false,
    zombie: false,
  };

  map[areaX] = {
    name: 'area X',
    desc: 'nothing of interest',
    west: areaW,
    east: areaY,
    southEast: areaT,
    south: areaS,
    southWest: areaR,
    occupied: false,
    zombie: false,
  };

  map[areaY] = {
    name: 'area Y',
    desc: 'nothing of interest',
    west: areaX,
    south: areaT,
    southWest: areaS,
    occupied: false,
    zombie: false,
  };

  return map;
});
