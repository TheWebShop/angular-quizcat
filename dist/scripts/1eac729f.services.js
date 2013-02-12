'use strict';

angular.module('quizcatServices', ['ngResource'])
  .factory('Quiz', function($resource){
    return $resource('quizes/:quizId.json', {}, {
      query: {method:'GET', params:{quizId:'quizes'}, isArray:true}
    });
  });
