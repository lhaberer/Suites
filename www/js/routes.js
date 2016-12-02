angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('createEvent2.createEvent', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/createEvent.html',
        controller: 'createEventCtrl'
      }
    }
  })

  .state('createEvent2.events', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('createEvent2.chat', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('createEvent2', {
    url: '/page1',
    templateUrl: 'templates/createEvent2.html',
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

$urlRouterProvider.otherwise('/page1/page4')

  

});