gameApp.controller('winController', function($scope, $location, playerFactory, scoreFactory){
	$scope.lastWinner = scoreFactory.getLastWinner();
	
	$scope.playAgain = function(){
		$location.path('/');
	}
});