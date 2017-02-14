'use strict';

const angular = require('angular');

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
    title: 'loren epsum',
    north: roomTwo,
  };
  map[roomTwo] = {
    title: 'loren epsum',
    east: roomThree,
  };
  map[roomThree] = {
    title: 'loren epsum',
    north: roomTen,
    south: roomFour,
    east: roomEight,
    west: roomTwo,
  };
  map[roomFour] = {
    title: 'loren epsum',
    east: roomFive,
  };
  map[roomFive] = {
    title: 'loren epsum',
    east: roomSix,
  };
  map[roomSix] = {
    title: 'loren epsum',
    north: roomSeven,
  };
  map[roomSeven] = {
    title: 'loren epsum',
    west: roomEight,
  };
  map[roomEight] = {
    title: 'loren epsum',
    north: roomNine,
    south: roomFive,
    east: roomSeven,
    west: roomThree,
  };
  map[roomNine] = {
    title: 'loren epsum',
    west: roomTen,
  };
  map[roomTen] = {
    title: 'loren epsum',
    west: roomEleven,
  };
  map[roomEleven] = {
    title: 'loren epsum',
    west: roomTwelve,
    south: roomTwo,
  };
  map[roomTwelve] = {
    title: 'loren epsum',
    south: roomThirteen,
  };
  map[roomThirteen] = {
    title: 'loren epsum',
    south: end,
  };
  map[end] = {
    title: 'loren epsum',
  };
  return map;
});
