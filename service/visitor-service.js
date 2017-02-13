'use strict';

const angular = require('angular');

angular.module('museumApp')
.service('visitorService', ['$window', 'mapLayout', function ($window, mapLayout){
  // let saveState = (visitor) => {
  //   try{
  //     $window.localStorage.visitor = JSON.strigify(visitor);
  //   } catch(e){
  //   }
  // };
  //
  // let getState = () => {
  //   try {
  //     let result = JSON.parse($window.localStorage.visitor);
  //     return result;
  //   } catch(e) {
  //     return {};
  //   }
  // };

  let visitor = {};

  visitor.name = 'Pretentious person';
  visitor.location = mapLayout.Lobby;
  visitor.history = [];

  visitor.move = (direction) => {
    let nextRoom = visitor.location[direction];
    if(nextRoom){
      visitor.location = mapLayout[nextRoom];
      visitor.pushHistory(visitor.location);
      return;
    }
    visitor.pushHistory(null);
  };

  visitor.undo = () => {
    visitor.history.shift();
    let top = visitor.history[0];
    if (top)
      visitor.location = top.location;
  };
  return visitor;
}]);
