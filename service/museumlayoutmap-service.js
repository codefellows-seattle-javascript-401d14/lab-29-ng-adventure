'use strict';

const angular = require('angular');

angular.module('museumApp')
.service('mapLayout', function (){

  let map = {};

  let roomA = 'Lobby';
  let roomB = 'ContemporaryArt';
  let roomC = 'GreekArt';
  let roomD = 'EuropeanArt';
  let roomE = 'AfricanArt';
  let roomF = 'AsianArt';

  map['Lobby'] = {
    desc: 'Lobby of Museum',
    east: roomB,
    south: roomF,
  };

  map['ContemporaryArt'] = {
    desc: 'ContemporaryArt',
    east: roomC,
    south: roomE,
    west: roomA,
  };

  map['GreekArt'] = {
    desc: 'GreekArt',
    west: roomB,
  };

  map['EuropeanArt'] = {
    desc: 'EuropeanArt',
    north: roomF,
  };

  map['AfricanArt'] = {
    desc: 'AfricanArt',
    north: roomB,
    west: roomF,
  };

  map['AsianArt'] = {
    desc: 'AsianArt',
    north: roomA,
    east: roomE,
    south: roomD,
  };

  return map;

});
