angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('createEvent.survey', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/survey.html',
        controller: 'surveyCtrl'
      }
    }
  })

  .state('createEvent.chat', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('createEvent', {
    url: '/page1',
    templateUrl: 'templates/createEvent.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('test', {
    url: '/page8',
    templateUrl: 'templates/test.html',
    controller: 'testCtrl'
  })

  .state('createEvent.events', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('createEvent.almaDance', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/almaDance.html',
        controller: 'almaDanceCtrl'
      }
    }
  })

  .state('createEvent.thanksgivingDinner', {
    url: '/page14',
    views: {
      'tab4': {
        templateUrl: 'templates/thanksgivingDinner.html',
        controller: 'thanksgivingDinnerCtrl'
      }
    }
  })

  .state('createEvent.christmasParty', {
    url: '/page15',
    views: {
      'tab4': {
        templateUrl: 'templates/christmasParty.html',
        controller: 'christmasPartyCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});