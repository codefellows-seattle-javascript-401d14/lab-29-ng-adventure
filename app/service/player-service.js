'use strict';

const angular = require('angular');
const uuidV1 = require('uuid/v1');

angular.module('resloveAdventureApp')
.service('playerService', [ '$window', 'mapService', function($window, mapService){
  let saveState = (player) => {
    try {
      $window.localStorage.player = JSON.stringify(player);
    } catch (e) {
      console.log(e);
    }
  };
  let getState = () => {
    try {
      let result = JSON.parse($window.localStorage.player);
      if(!result) throw new Error('nothing found');
      return result;
    } catch(e) {
      return {};
    }
  };
  let player = getState();
  console.log('player', player);
  if(!player.name)
    player.name = 'reslove';
  if(!player.location)
    player.location = mapService.RM1;
  if(!player.history)
    player.history = [];
  player.pushHistory = (location) => {
    if(location){
      player.history.unshift({
        location: player.location,
        content: `${player.name} is now in ${location.title}`,
        id: uuidV1(),
      });
    } else {
      player.history.unshift({
        location: player.location,
        content: `${player.name} hit a wall`,
        id: uuidV1(),
      });
    }
    console.log('push history', player.history);
    saveState(player);
  };
  player.move = (direction) => {
    let nextLocation = player.location[direction];
    if(nextLocation){
      player.location = mapService[nextLocation];
      player.pushHistory(player.location);
      saveState(player);
      return;
    }
    player.pushHistory(null);
  };
  player.undo = () => {
    console.log('player.undo pressed');
    player.history.shift();
    let top = player.history[0];
    if (top)
      player.location = top.location;
    saveState(player);
  };
  player.deleteHistory = (id) => {
    console.log('player.deleteHistory pressed');
    player.history =  player.history.filter(move => {
      return move.id != id;
    });
    saveState(player);
  };
  return player;
}]);
