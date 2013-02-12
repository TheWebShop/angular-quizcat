'use strict';

function ResultCtrl($rootScope, $scope, $location) {
  $scope.currentQuiz = $rootScope.currentQuiz;
  $scope.quizSize = $rootScope.quizSize;
  $scope.correct = $rootScope.lastScore = $rootScope.correct;
}