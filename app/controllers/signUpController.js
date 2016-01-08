gameApp.controller('signUpController', function($scope, $rootScope, $location, scoreFactory, playerFactory){
	scoreFactory.reset();
	playerFactory.reset();
	
	$scope.goToPlay = function(){
		playerFactory.savePlayerNames($scope.name1, $scope.name2);
		$location.path('/play');
	}
});