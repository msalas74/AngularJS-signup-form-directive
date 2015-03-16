
var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="brandLogo"><p><span ng-transclude></span> Logo</p></div>',
		replace: true

	}
});

app.directive('optForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'opt-in-template.html'
	}
});