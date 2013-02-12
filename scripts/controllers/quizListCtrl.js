'use strict';

function QuizListCtrl($scope, Quiz) {
  $scope.quizes = Quiz.query(function(quizes) {
    angular.forEach(quizes, function(quiz) {
      quiz.created = moment(quiz.created);
    });
  });
  $scope.orderProp = 'created';
}