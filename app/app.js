var gameApp = angular.module('gameApp',['ngRoute']);
		
gameApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/',{
			controller: 'signUpController',
			templateUrl: '/app/partials/signUp.html',
			headerType: '1'
		})
		.when('/play',{
			controller: 'playController',
			templateUrl: '/app/partials/play.html',
			headerType: '2'
		})
		.when('/win',{
			controller: 'winController',
			templateUrl: '/app/partials/win.html',
			headerType: '1'
		})
		.when('/moves',{
			controller: 'movesController',
			templateUrl: '/app/partials/moves.html',
			headerType: '2'
		})
		.when('/history',{
			controller: 'historyController',
			templateUrl: '/app/partials/history.html',
			headerType: '2'
		})
		.otherwise({ redirectTo: '/' });
	
	$locationProvider.html5Mode(true);
}]);

gameApp.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.headerType = current.$$route.headerType;
    });
}]);