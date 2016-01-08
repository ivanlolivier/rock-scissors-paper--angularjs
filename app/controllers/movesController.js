gameApp.controller('movesController', function($scope, $rootScope, $location, moveFactory){
	$scope.moves = moveFactory.getMoves();
	$scope.newBeats = [];
	$scope.message = '';
	
	$scope.saveMove = function(){
		console.log($rootScope.message);
		moveFactory.saveNewMove($scope.newMove,'');
		$rootScope.message = 'New move added (' + $scope.newMove + ')';
		setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
	};
	
	$scope.saveBeats = function(){
		for (moveToChange in $scope.newBeats) {
			moveFactory.setBeats(moveToChange, $scope.newBeats[moveToChange]);
		}
		$rootScope.message = 'Beats updated';
		setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
	};
	
	$scope.deleteMove = function(moveName){
		moveFactory.deleteMove(moveName);
		$rootScope.message = 'Move deleted';
		setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
	};
	
	$scope.resetMoves = function(){
		moveFactory.reset();
		$scope.moves = moveFactory.getMoves();
		$rootScope.message = 'Moves reseted';
		setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
	};
});