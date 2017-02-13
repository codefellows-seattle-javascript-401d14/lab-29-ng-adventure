'use strict';

const angular = require('angular');

angular.module('museumApp')
.service('visitorService', ['$window', 'mapLayout', function ($window, mapLayout){
  let saveState = (visitor) => {
    try{
      $window.localStorage.visitor = JSON.strigify(visitor);
    } catch(e){ }
  };

  let getState = () => {
    try {
      let result = JSON.parse($window.localStorage.visitor);
      return result;
    } catch(e) {
      return {};
    }
  };

  let visitor = getState();
  console.log('visitor', visitor);
  if(!visitor.name)
    visitor.name = 'Pretentious person';

  if(!visitor.location)
    visitor.location = mapLayout.Lobby;

  if(!visitor.history)
    visitor.history = [];

  visitor.pushHistory = (location) => {
    if(location){
      visitor.history.unshift({
        location:location,
        desc: `${visitor.name} is now in ${location.desc}`,
        id: Math.random(),
      });
    } else {
      visitor.history.unshift({
        location: visitor.location,
        desc: `${visitor.name}, you can't go that way! Try again.`,
        id: Math.random(),
      });
    }
    console.log('history', visitor.history);
    saveState();
  };

  visitor.move = (direction) => {
    console.log('djfnvkdjfbkdj');
    let nextRoom = visitor.location[direction];
    if(nextRoom){
      visitor.location = mapLayout[nextRoom];
      visitor.history.push(visitor.location);
      return;
    }
    visitor.pushHistory(null);
    saveState();
  };

  visitor.undo = () => {
    visitor.history.shift();
    let top = visitor.history[0];
    if (top)
      visitor.location = top.location;
    saveState();
  };
  return visitor;
}]);
