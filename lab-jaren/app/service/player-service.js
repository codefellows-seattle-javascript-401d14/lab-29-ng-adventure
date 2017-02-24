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

  let monsterRoom = mapService.rooms[Math.floor(Math.random() * 25)];

  let defaultPlayer = {
    win: false,
    name: 'You',
    location: mapService.ROOM_A,
    isHiding: false,
    isFound: false,
    dangerLevel: 0,
    dead: false,
    history: [],
    monster: mapService[monsterRoom],
    monStory: 'is on the prowl.',
  };

  let player = getState();
  if(!player.monster) player = defaultPlayer;
  console.log('player', player);
  console.log('monster', player.monster);

  player.pushHistory = (location) => {
    if(location) {
      console.log('push move monstory', player.monStory);
      if(player.location === mapService.ROOM_V) player.win = true;
      if(player.dangerLevel === 5) player.dead = true;
      player.history.unshift({
        location: location,
        desc: `${player.name} are now in ${location.desc}`,
        monsterDesc: `The Demigorgon ${player.monStory}`,
        isHiding: player.isHiding,
        isFound: player.isFound,
        monster: player.monster,
        dangerLevel: player.dangerLevel,
        id: Math.random(),
      });
      console.log('player', player);
      console.log('monster', player.monster);
    } else {
      console.log('tendril monstory', player.monStory);
      player.history.unshift({
        location: player.location,
        desc: `${player.name} hit a wall covered in decaying tendrils.`,
        monsterDesc: `The Demigorgon ${player.monStory}`,
        isHiding: player.isHiding,
        isFound: player.isFound,
        monster: player.monster,
        dangerLevel: player.dangerLevel,
        id: Math.random(),
      });
      console.log('monster', player.monster);
    }
    console.log('history', player.history);
    saveState();
  };

  player.move = (direction) => {
    let nextLocation = player.location[direction];

    player.isHiding = false;

    if(nextLocation) {
      player.location = mapService[nextLocation];
      // monster move
      if(player.isFound) {
        player.monster = mapService[nextLocation];
      } else {
        let dir = mapService.directions[Math.floor(Math.random()*4)];
        let nextMonster = mapService[player.monster[dir]];
        nextMonster ? player.monster = nextMonster : player.monster = player.monster;
      }
      if(player.location == player.monster) {
        player.isFound = true;
        player.dangerLevel++;
        player.dangerLevel === 1 ? player.monStory = 'has seen you!' : player.monStory = 'is chasing you!';
        if(player.dangerLevel === 5) player.dead = true;
      }
      player.pushHistory(player.location);
      saveState();
      return;
    }
    if(player.location == player.monster) {
      player.isFound = true;
      player.dangerLevel++;
      if(player.dangerLevel === 5) player.dead = true;
    } else {
      let dir = mapService.directions[Math.floor(Math.random()*4)];
      let nextMonster = mapService[player.monster[dir]];
      nextMonster ? player.monster = nextMonster : player.monster = player.monster;
    }
    player.pushHistory(null);
    saveState();
  };

  player.hide = () => {
    if(player.location.cover) {
      player.isHiding = true;
      player.isFound = false;
      if(player.dangerLevel > 0) player.dangerLevel--;
      let dir = mapService.directions[Math.floor(Math.random()*4)];
      let nextMonster = mapService[player.monster[dir]];
      nextMonster ? player.monster = nextMonster : player.monster = player.monster;
      // monster still in the room
      if(player.location == player.monster) {
        player.dangerLevel++;
        player.monStory = 'can\'t see you, for now...';
        console.log('hiding with monstory', player.monStory);
      } else { // hiding for funzies
        player.monStory = 'is on the prowl.';
      }
      console.log('hiding', player.monStory);
      player.history.unshift({
        location: player.location,
        desc: `${player.name} hide ${player.location.cover}`,
        isHiding: player.isHiding,
        isFound: player.isFound,
        monster: player.monster,
        monsterDesc: `The Demigorgon ${player.monStory}`,
        dangerLevel: player.dangerLevel,
        id: Math.random(),
      });
      console.log('player', player);
      console.log('monster', player.monster);
    } else {
      if(player.location == player.monster) {
        player.dangerLevel++;
        if(player.dangerLevel === 5) player.dead = true;
        player.monStory = 'lunges at you, barely missing as you dodge out of the way!';
      } else {
        let dir = mapService.directions[Math.floor(Math.random()*4)];
        let nextMonster = mapService[player.monster[dir]];
        nextMonster ? player.monster = nextMonster : player.monster = player.monster;
        player.monStory = 'is on the prowl.';
      }
      console.log('no cover monstory', player.monStory);
      player.history.unshift({
        location: player.location,
        desc: 'There isn\'t enough cover to hide!',
        isHiding: player.isHiding,
        isFound: player.isFound,
        monster: player.monster,
        monsterDesc: `The Demigorgon ${player.monStory}`,
        dangerLevel: player.dangerLevel,
        id: Math.random(),
      });
      console.log('player', player);
      console.log('monster', player.monster);
    }
    saveState();
  };

  player.undo = () => {
    player.history.shift();
    let top = player.history[0];
    if(top) {
      player.location = top.location;
      player.isHiding = top.isHiding;
      player.isFound = top.isFound;
      player.monster = top.monster;
      player.monStory = top.monStory;
      player.dangerLevel = top.dangerLevel;
    }
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
    player.isHiding = false;
    player.isFound = false;
    player.dangerLevel = 0;
    player.dead = false;

    let monsterRoom = mapService.rooms[Math.floor(Math.random() * 25)];
    player.monster = mapService[monsterRoom];
    player.monStory = 'is on the prowl.';
  };

  return player;
}]);
