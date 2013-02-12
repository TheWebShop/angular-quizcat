'use strict';

quizApp.factory('quizModel', function (questionModel) {
    return {
        initialize: function (data) {
            var quizData = {
              name: data.name,
              snippet: data.snippet,
              currentPage: 0,
              created: moment(data.created),
              questions: []
            };

            angular.forEach(data.questions, function (q, i) {
                quizData.questions.push( questionModel.create(q, (i+1)) );
            });

            return quizData;
        }
    };
});
