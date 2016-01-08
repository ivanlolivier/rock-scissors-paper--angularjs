gameApp.controller('historyController', function($scope, $rootScope, historyFactory){
	$scope.history = historyFactory.getHistory();
	
	$scope.clearHistory = function(){
		historyFactory.clear();
		$scope.history = historyFactory.getHistory();
		$rootScope.message = 'History erased';
		setTimeout(function(){$rootScope.message = '';$scope.$apply();}, 2000);
	}
});