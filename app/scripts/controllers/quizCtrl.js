'use strict';

var QuizCtrl = function($rootScope, $scope, $location, $routeParams, Quiz, quizModel) {

  $scope.lastScore = $rootScope.lastScore;

  $scope.quiz = Quiz.get({quizId: $routeParams.quizId}, function(data) {

    $scope.quiz = quizModel.initialize(data);

    $rootScope.quizSize = $scope.quiz.questions.length;
    $rootScope.correct = 0;
    $rootScope.currentQuiz = $routeParams.quizId;

    $scope.currentPosition = -1;
    $scope.nextQuestion();
  });

  $scope.hasNext = function () {
      return !($scope.currentPosition >= $rootScope.quizSize - 1);
  };

  $scope.nextQuestion = function () {
      $scope.currentQuestion = $scope.quiz.questions[++$scope.currentPosition];
  };

  $scope.submitAns = function () {
      if ($scope.currentResponse == $scope.currentQuestion.correctAnswer) ++$rootScope.correct;
      $scope.next();
  };

  $scope.isAnswered = function () {
      return ($scope.currentResponse !== "" && $scope.currentResponse !== undefined)
  };

  $scope.next = function () {
      if ($scope.hasNext()) {
          $scope.currentResponse = "";
          $scope.nextQuestion();
      } else {
          $location.path('/results');
      }
  };

  $scope.isReplay = function () {
    return $rootScope.lastScore !== undefined;
  };
};

QuizCtrl.$inject = ['$rootScope', '$scope', '$location', '$routeParams', 'Quiz', 'quizModel'];