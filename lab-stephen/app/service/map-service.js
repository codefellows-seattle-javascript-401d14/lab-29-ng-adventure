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
    desc: 'doorway',
    east: areaB,
    north: areaF,
    northEast: areaG,
  };

  map[areaB] = {
    desc: 'nothing of interest',
    west: areaA,
    northWest: areaF,
    north: areaG,
    northEast: areaH,
    east: areaC,
  };

  map[areaC] = {
    desc: 'nothing of interest',
    west: areaB,
    northWest: areaG,
    north: areaH,
    northEast: areaI,
    east: areaD,
  };

  map[areaD] = {
    desc: 'nothing of interest',
    west: areaC,
    northWest: areaH,
    north: areaI,
    northEast: areaJ,
    east: areaE,
  };

  map[areaE] = {
    desc: 'nothing of interest',
    west: areaD,
    northWest: areaI,
    north: areaJ,
  };

  map[areaF] = {
    desc: 'nothing of interest',
    north: areaK,
    northEast: areaL,
    east: areaG,
    southEast: areaB,
    south: areaA,
  };

  map[areaG] = {
    desc: 'nothing of interest',
    west: areaF,
    northWest: areaK,
    north: areaL,
    northEast: areaM,
    east: areaH,
    southEast: areaC,
    south: areaB,
    southWest: areaA,
  };

  map[areaH] = {
    desc: 'nothing of interest',
    west: areaG,
    northWest: areaL,
    north: areaM,
    northEast: areaN,
    east: areaI,
    southEast: areaD,
    south: areaC,
    southWest: areaB,
  };

  map[areaI] = {
    desc: 'nothing of interest',
    west: areaH,
    northWest: areaM,
    north: areaN,
    northEast: areaO,
    east: areaJ,
    southEast: areaE,
    south: areaD,
    southWest: areaC,
  };

  map[areaJ] = {
    desc: 'nothing of interest',
    west: areaI,
    northWest: areaN,
    north: areaO,
    south: areaE,
    southWest: areaD,
  };

  map[areaK] = {
    desc: 'nothing of interest',
    north: areaP,
    northEast: areaQ,
    east: areaL,
    southEast: areaG,
    south: areaF,
  };

  map[areaL] = {
    desc: 'nothing of interest',
    west: areaK,
    northWest: areaP,
    north: areaQ,
    northEast: areaR,
    east: areaM,
    southEast: areaH,
    south: areaG,
    southWest: areaF,
  };

  map[areaM] = {
    desc: 'player starting area',
    west: areaL,
    northWest: areaQ,
    north: areaR,
    northEast: areaS,
    east: areaN,
    southEast: areaI,
    south: areaH,
    southWest: areaG,
  };

  map[areaN] = {
    desc: 'nothing of interest',
    west: areaM,
    northWest: areaR,
    north: areaS,
    northEast: areaT,
    east: areaO,
    southEast: areaJ,
    south: areaI,
    southWest: areaH,
  };

  map[areaO] = {
    desc: 'nothing of interest',
    west: areaN,
    northWest: areaS,
    north: areaT,
    south: areaJ,
    southWest: areaI,
  };

  map[areaP] = {
    desc: 'nothing of interest',
    north: areaU,
    northEast: areaV,
    east: areaQ,
    south: areaL,
    southWest: areaK,
  };

  map[areaQ] = {
    desc: 'nothing of interest',
    west: areaP,
    northWest: areaU,
    north: areaV,
    northEast: areaW,
    east: areaR,
    southEast: areaM,
    south: areaL,
    southWest: areaK,
  };

  map[areaR] = {
    desc: 'nothing of interest',
    west: areaQ,
    northWest: areaV,
    north: areaW,
    northEast: areaX,
    east: areaS,
    southEast: areaN,
    south: areaM,
    southWest: areaL,
  };

  map[areaS] = {
    desc: 'nothing of interest',
    west: areaR,
    northWest: areaW,
    north: areaX,
    northEast: areaY,
    east: areaT,
    southEast: areaO,
    south: areaN,
    southWest: areaM,
  };

  map[areaT] = {
    desc: 'nothing of interest',
    west: areaS,
    northWest: areaX,
    north: areaY,
    south: areaO,
    southWest: areaN,
  };

  map[areaU] = {
    desc: 'sword in corner',
    east: areaV,
    southEast: areaQ,
    south: areaP,
  };

  map[areaV] = {
    desc: 'nothing of interest',
    west: areaU,
    east: areaW,
    southEast: areaR,
    south: areaQ,
    southWest: areaP,
  };

  map[areaW] = {
    desc: 'nothing of interest',
    west: areaV,
    east: areaX,
    southEast: areaS,
    south: areaR,
    southWest: areaQ,
  };

  map[areaX] = {
    desc: 'nothing of interest',
    west: areaW,
    east: areaY,
    southEast: areaT,
    south: areaS,
    southWest: areaR,
  };

  map[areaY] = {
    desc: 'nothing of interest',
    west: areaX,
    south: areaT,
    southWest: areaS,
  };

  return map;
});
