describe('optForm', function() {
	var scope,
		element,
		compiled,
		html;

	beforeEach(module('myApp'));
	beforeEach(inject(function($rootScope, $compile) {
		html = "";
		html += '<div class="optIn">';
		html += '<form>';
		html += '<input type="text" name="firstName" placeholder="first name">';
		html += '<input type="text" name="lastName" placeholder="last name">';
		html += '<input type="email" name="email" placeholder="email">';
		html += '<input type="submit" class="button" name="submit" value="Give us yr infoz!">';
		html += '</form>';
		html += '</div>';
		html += '<div class="clearFix"></div>';


		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));

	it('should render the element correctly', function() {
		expect(element.find('input').length).toBe(4);
	});

});