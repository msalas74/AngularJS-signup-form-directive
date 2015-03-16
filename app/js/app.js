
var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="brandLogo"></div>',
		replace: true

	}
});

app.directive('optForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'opt-in-template.html'
	}
});