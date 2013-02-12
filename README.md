# AngularJS Quiz Catalog


## Overview

This application gives a simple interface for a list of quizes. Quizes are a list of text based questions and answers. It is built using [Yeoman](http://yeoman.io/), patterned after the [angular-phonecat](https://github.com/angular/angular-phonecat) with the help from [Quiz-on-AngularJS](https://github.com/Shiti/Quiz-on-AngularJS). I have incorporated much of their explanatory documentation and comments as this is the first Angular application published by [TheWebShop](http://thewebshop.org/).


## Prerequisites

### Git
- A good place to learn about setting up git is [here](http://help.github.com/set-up-git-redirect)
- Git [home](http://git-scm.com) (download, documentation)

### Yeoman
- Yeoman [home](http://yeoman.io).
- Breakpoint [introduction to Yeoman](http://addyosmani.com/blog/tag/yeoman/).

### Bower
- Bower [home](http://twitter.github.com/bower/).


## Workings of the application

- The application filesystem layout structure is based on the Yeoman [angular seed](https://github.com/yeoman/generator-angular).
- There is no backend (no server) for this application. Instead we fake the XHRs by fetching static json files.


## Application Directory Layout

    app/                      --> all of the files to be used in production
      styles/                 --> css and scss files
        main.scss             --> default sass stylesheet
        main.css              --> compiled output of default sass stylesheet
      index.html              --> app layout file (the main html template file of the app)
      scripts/                --> javascript files
        app.js                --> application
        services.js           --> custom angular services
        controllers/          --> application controllers
          quizListCtr.js      --> quiz list controller
          quizCtr.js          --> quiz controller
          resultCtrl.js       --> results controller        
      views/                  --> angular view partials (partial html templates)
        quiz.html             --> quiz view
        quiz-list.html        --> quiz list view
        quiz-result           --> quiz result view
    components/               --> bower installed components
      angular/
          angular.js          --> the latest angular js
      angular-resource/
          angular-resource.js --> for dealing with RESTful server-side data sources
      moment/
        moment.js             --> makes dealing with dates a breeze


## Contact

For more information on AngularJS please check out http://angularjs.org/
