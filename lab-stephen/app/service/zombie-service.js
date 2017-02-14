'use strict';

const angular = require('angular');

angular.module('zombieApp')
.service('zombieService', [ '$window', 'mapService', function($window, mapService){

  let zombie = {};

  let saveState = () => {
    try {
      $window.localStorage.group = JSON.stringify(group);
    } catch (e){
    }
  };

  let getState = () => {
    try {
      let result = JSON.parse($window.localStorage.group);
      console.log('result', result);
      return result;
    } catch(e) {
      return {};
    }
  };

  let group = getState();
  if(!group[0])
    group = [];



  zombie.name = 'zombie';
  zombie.location = mapService.AREA_A;
  zombie.alive = true;
  zombie.potentialDirections = ['west', 'northWest', 'north', 'northEast', 'east', 'southEast', 'south', 'southWest'];
  zombie.direction = 5;
  // zombie.spawn = () => {
  //   group.push(new zombie);
  // };


  zombie.move = () => {
    let nextLocation = zombie.location[zombie.potentialDirections[Math.floor(Math.random() * 7)]];
    if(nextLocation){
      zombie.location = mapService[nextLocation];
      console.log(`A ${zombie.name} moved to ${nextLocation}`);
      return;
    }
    else {
      console.log(`A ${zombie.name} walked into a wall`);
    }
  };

  return zombie;
}]);
