"use strict";

quizApp.factory('questionModel', function () {
    return {
        create: function (data, id) {
            var question = {
              text: data.question,
              options: data.answers,
              correctAnswer: data.correctAnswer,
              id: data.id
            };

            return question;
        }
    };
});
