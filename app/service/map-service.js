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
    title: 'Start',
    north: roomTwo,
  };
  map[roomTwo] = {
    title: 'Room 2',
    east: roomThree,
  };
  map[roomThree] = {
    title: 'Room 3',
    north: roomTen,
    south: roomFour,
    east: roomEight,
    west: roomTwo,
  };
  map[roomFour] = {
    title: 'Room 5',
    east: roomFive,
  };
  map[roomFive] = {
    title: 'Room 5',
    east: roomSix,
  };
  map[roomSix] = {
    title: 'Room 6',
    north: roomSeven,
  };
  map[roomSeven] = {
    title: 'Room 7',
    west: roomEight,
  };
  map[roomEight] = {
    title: 'Room 8',
    north: roomNine,
    south: roomFive,
    east: roomSeven,
    west: roomThree,
  };
  map[roomNine] = {
    title: 'Room 9',
    west: roomTen,
  };
  map[roomTen] = {
    title: 'Room 10',
    west: roomEleven,
  };
  map[roomEleven] = {
    title: 'Room 11',
    west: roomTwelve,
    south: roomTwo,
  };
  map[roomTwelve] = {
    title: 'Room 12',
    south: roomThirteen,
  };
  map[roomThirteen] = {
    title: 'Room 13',
    south: end,
  };
  map[end] = {
    title: 'The End',
  };
  return map;
});
