'use strict';

const angular = require('angular');

angular.module('cfudApp')
.service('playerService', ['$window', 'mapService', function($window, mapService) {
  let saveState = () => {
    try {
      $window.localStorage.player = JSON.stringify(player);
    } catch(e){}
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
  let resetState = () => {
    try {
      $window.localStorage.clear();
    } catch(e){}
  };

  let player = getState();
  console.log('player', player);
  if(!player.win)
    player.win = false;
  if(!player.name)
    player.name = 'You';
  if(!player.location)
    player.location = mapService.ROOM_A;
  if(!player.history)
    player.history = [];

  player.pushHistory = (location) => {
    if(location) {
      if(player.location === mapService.ROOM_V){
        player.win = true;
      }
      player.history.unshift({
        location: location,
        desc: `${player.name} are now in ${location.desc}`,
        id: Math.random(),
      });
    } else {
      player.history.unshift({
        location: player.location,
        desc: `${player.name} hit a wall covered in decaying tendrils.`,
        id: Math.random(),
      });
    }
    console.log('history', player.history);
    saveState();
  };

  player.move = (direction) => {
    let nextLocation = player.location[direction];
    if(nextLocation) {
      player.location = mapService[nextLocation];
      player.pushHistory(player.location);
      saveState();
      return;
    }
    player.pushHistory(null);
    saveState();
  };

  player.undo = () => {
    player.history.shift();
    let top = player.history[0];
    if(top)
      player.location = top.location;
    saveState();
  };

  player.removeMove = (id) => {
    player.history = player.history.filter(move => {
      return move.id != id;
    });
    saveState();
  };

  player.reset = () => {
    resetState();
    player.win = false;
    player.location = mapService.ROOM_A;
    player.history = [];
  };

  return player;
}]);
