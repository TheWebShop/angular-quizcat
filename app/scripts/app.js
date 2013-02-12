'use strict';

var quizApp = angular.module('angularQuizcatApp', ['quizcatServices'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/quizes', {
        templateUrl: 'views/quiz-list.html',
        controller: 'QuizListCtrl'
      })
      .when('/quiz/:quizId', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .when('/results', {
        templateUrl: 'views/quiz-result.html',
         controller: 'ResultCtrl'
      })
      .otherwise({
        redirectTo: '/quizes'
      });
  }]);
