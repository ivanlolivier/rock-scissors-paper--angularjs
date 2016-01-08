gameApp.controller('playController', function($scope, $rootScope, $location, playerFactory, moveFactory, scoreFactory, historyFactory){
	$scope.round = scoreFactory.getRound();
	
	var players = playerFactory.getPlayers();
	$scope.player1 = players[0];
	$scope.player2 = players[1];
	
	$scope.moves = moveFactory.getMoves();
	
	$scope.scores = scoreFactory.getScores();
	
	$scope.compete = function(){
		winner = calculateWinner();
		scoreFactory.saveScore($scope.round, winner);
		$scope.round++;
		
		if (threeWinsInRow()){
			looser = $scope.player2;
			if (winner == $scope.player2) looser = $scope.player1;
			historyFactory.addHistory(winner, looser);
			$location.path('/win');
		} else {
			$rootScope.message = 'This round wins: ' + winner;
			setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
		}
	}
	
	function calculateWinner(){
		for (moveIndex in $scope.moves) {
			move = $scope.moves[moveIndex];
			if (($scope.move1 == move.name) && ($scope.move2 == move.beats)) return $scope.player1;
			else if (($scope.move2 == move.name) && ($scope.move1 == move.beats)) return $scope.player2;
		}
		return '- tie -';
	}
	
	function threeWinsInRow(){
		if ($scope.round < 4) return false; 
		return (($scope.scores[$scope.round-1] == $scope.scores[$scope.round-2]) && ($scope.scores[$scope.round-2] == $scope.scores[$scope.round-3]));
	}
});