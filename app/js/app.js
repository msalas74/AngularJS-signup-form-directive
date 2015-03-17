
var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="brandLogo"><p><span ng-transclude></span> Logo</p></div>'
		//replace: true  //replaces tag that template is being inserted in

	}
});

app.directive('optForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'opt-in-template.html'
	}
});