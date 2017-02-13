'use strict';

const angular = require('angular');

angular.module('zombieApp')
.service('playerService', [ '$window', 'mapService', function($window, mapService){

  let player = {};
  player.name = 'player';
  player.location = mapService.AREA_M;

  player.move = (direction) => {
    let nextLocation = player.location[direction];
    if(nextLocation){
      player.location = mapService[nextLocation];
      console.log(`${player.name} moved to ${nextLocation}`);
      return;
    }
    else {
      console.log(`${player.name} walked into a wall`);
    }
  };

  return player;
}]);
