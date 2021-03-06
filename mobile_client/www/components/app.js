angular.module('app', [
  'ionic',
  'app.routes',
  'app.constants',
  'app.AuthFactory',
  'app.GeoFactory',
  'app.LoginController',
  'app.LoginFactory',
  'app.SignupController',
  'app.SignupFactory',
  'app.MainController',
  'app.MainFactory',
  'app.SettingsController',
  'app.SettingsFactory',
  'app.EventController',
  'app.EventFactory',
  'app.FriendsController',
  'app.FriendsFactory',
])

.constant('_', window._)

.run(function($ionicPlatform, $rootScope, $state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport from snapping when text inputs are focused. Ionic handles this internally for a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope._ = window._;

  $rootScope.$on('$stateChangeStart' , function(event, toState) {
    if(!toState.authenticate || $rootScope.isAuthenticated){
      return;
    }
    event.preventDefault();
    if(toState.authenticate){
      $state.go('login')
      return
    }
  });
});
