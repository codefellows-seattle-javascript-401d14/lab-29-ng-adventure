'use strict';

const angular = require('angular');
const uuidV1 = require('uuid/v1');


angular.module('resloveAdventureApp')
.service('mapService', function() {
  let map = {};
  let start = 'RM1';
  let roomTwo = 'RM2';
  let roomThree = 'RM3';
  let roomFour = 'RM4';
  let roomFive = 'RM5';
  let roomSix = 'RM6';
  let roomSeven = 'RM7';
  let roomEight = 'RM8';
  let roomNine = 'RM9';
  let roomTen = 'RM10';
  let roomEleven = 'RM11';
  let roomTwelve = 'RM12';
  let roomThirteen = 'RM13';
  let end = 'RM14';

  map[start] = {
    id: uuidV1(),
    title: 'loren epsum',
    north: roomTwo,
  };
  map[roomTwo] = {
    id: uuidV1(),
    title: 'loren epsum',
    east: roomThree,
  };
  map[roomThree] = {
    id: uuidV1(),
    title: 'loren epsum',
    north: roomTen,
    south: roomFour,
    east: roomEight,
    west: roomTwo,
  };
  map[roomFour] = {
    id: uuidV1(),
    title: 'loren epsum',
    east: roomFive,
  };
  map[roomFive] = {
    id: uuidV1(),
    title: 'loren epsum',
    east: roomSix,
  };
  map[roomSix] = {
    id: uuidV1(),
    title: 'loren epsum',
    north: roomSeven,
  };
  map[roomSeven] = {
    id: uuidV1(),
    title: 'loren epsum',
    west: roomEight,
  };
  map[roomEight] = {
    id: uuidV1(),
    title: 'loren epsum',
    north: roomNine,
    south: roomFive,
    east: roomSeven,
    west: roomThree,
  };
  map[roomNine] = {
    id: uuidV1(),
    title: 'loren epsum',
    west: roomTen,
  };
  map[roomTen] = {
    id: uuidV1(),
    title: 'loren epsum',
    west: roomEleven,
  };
  map[roomEleven] = {
    id: uuidV1(),
    title: 'loren epsum',
    west: roomTwelve,
    south: roomTwo,
  };
  map[roomTwelve] = {
    id: uuidV1(),
    title: 'loren epsum',
    south: roomThirteen,
  };
  map[roomThirteen] = {
    id: uuidV1(),
    title: 'loren epsum',
    south: end,
  };
  map[end] = {
    id: uuidV1(),
    title: 'loren epsum',
  };
  return map;
});
