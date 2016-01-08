gameApp.factory('playerFactory', function(){
	var factory = {};
	var players = [];
	
	players.push('Jug1');
	players.push('Jug2');
	
	factory.getPlayers = function(){
		return players;
	};
	factory.savePlayerNames = function ($name1, $name2){
		players = [];
		players.push($name1);
		players.push($name2);
	};
	factory.reset = function(){
		players = [];
	}
	
	return factory;
});

gameApp.factory('moveFactory', function(){
	var factory = {};
	var moves = [
  	    { name: 'Paper',	beats: 'Rock'		},
 	    { name: 'Rock',		beats: 'Scissors'	},
 	    { name: 'Scissors',	beats: 'Paper'		}
 	];
	
	factory.getMoves = function(){
		return moves;
	};
	factory.saveNewMove = function ($movementName){
		moves.push({ name : $movementName , beats : '' })
	};
	factory.setBeats = function ($moveName, $moveBeats){
		for (moveIndex in moves) {
			if (moves[moveIndex].name == $moveName) moves[moveIndex].beats = $moveBeats;
		}
	};
	factory.reset = function(){
		moves = [
	  	    { name: 'Paper',	beats: 'Rock'		},
	 	    { name: 'Rock',		beats: 'Scissors'	},
	 	    { name: 'Scissors',	beats: 'Paper'		}
	 	];
	};
	factory.deleteMove = function(moveName){
		for (moveIndex in moves) {
			move = moves[moveIndex];
			if (move.name == moveName){
				moves.splice(moveIndex, 1);
			}
		}
	}
	
	return factory;
});

gameApp.factory('scoreFactory', function(){
	var factory = {};
	var scores = [];
	var round = 1;
	
	factory.getRound = function(){
		return round;
	};
	factory.getScores = function(){
		return scores;
	};
	factory.saveScore = function ($round, $winner){
		round++;
		scores[$round] = $winner;
	};
	factory.getLastWinner = function(){
		return scores[scores.length - 1];
	}
	factory.reset = function(){
		round = 1;
		scores = [];
	}
	
	return factory;
});

gameApp.factory('historyFactory', function($window, $rootScope){
	var factory = {};
	var history = [];
	
	function getHistory(){
		if ($window.localStorage){
			history = angular.fromJson($window.localStorage.getItem('history'));
			if (!history) history = []; 
		}
		
		return history;
	}
	
	factory.getHistory = getHistory;
	factory.addHistory = function ($winner, $looser){
		history = getHistory()
		history.push({ winner: $winner, looser: $looser })
	    $window.localStorage && $window.localStorage.setItem('history', angular.toJson(history));
	};
	factory.clear = function (){
		history = [];
		$window.localStorage && $window.localStorage.setItem('history', angular.toJson(history));
	};
	
	return factory;
});