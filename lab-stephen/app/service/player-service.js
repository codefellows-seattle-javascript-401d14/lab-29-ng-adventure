'use strict';

const angular = require('angular');

angular.module('zombieApp')
.service('playerService', [ '$window', 'mapService', function($window, mapService){

  let saveState = () => {
    try {
      $window.localStorage.player = JSON.stringify(player);
    } catch (e){
    }
  };

  let getState = () => {
    try {
      let result = JSON.parse($window.localStorage.player);
      console.log('result', result);
      return result;
    } catch(e) {
      return {};
    }
  };

  let player = getState();
  if(!player.name)
    player.name = 'player';
  if(!player.location)
    player.location = mapService.AREA_M;
  if(!player.history)
    player.history = [];

  player.pushHistory = (location) => {
    if(location){
      player.history.unshift({
        location: location,
        desc: `${player.name} is now in ${player.location.name}`,
        id: Math.random(),
      });
    } else {
      player.history.unshift({
        location: player.location,
        desc: `${player.name} hit a wall`,
        id: Math.random(),
      });
    }
    console.log('history', player.history);
    saveState();
  };

  player.move = (direction) => {
    let nextLocation = player.location[direction];
    if(nextLocation){
      player.location = mapService[nextLocation];
      player.pushHistory(player.location);
      console.log(`${player.name} moved to ${nextLocation}`);
      saveState();
      return;
    }
    else {
      player.pushHistory(null);
      console.log(`${player.name} walked into a wall`);
      saveState();
    }
  };

  player.undo = () => {
    player.history.shift();
    let top = player.history[0];
    if (top)
      player.location = top.location;
    saveState();
  };

  player.removeMove = (id) => {
    player.history = player.history.filter(move => {
      return move.id != id;
    });
    saveState();
  };

  return player;
}]);
