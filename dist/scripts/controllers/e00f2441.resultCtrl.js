'use strict';

var ResultCtrl = function($rootScope, $scope, $location) {
  $scope.currentQuiz = $rootScope.currentQuiz;
  $scope.quizSize = $rootScope.quizSize;
  $scope.correct = $rootScope.lastScore = $rootScope.correct;
};
ResultCtrl.$inject = ['$rootScope', '$scope', '$location'];