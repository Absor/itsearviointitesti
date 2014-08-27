angular.module('satest').filter('interpretationType', function() {
	return function(input,arg) {
        if (input === "strength") {
            return 'Vahvuus';
        } else {
            return 'Kehitysalue';
        }
	};
});