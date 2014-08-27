angular.module('satest').directive('confirmClick', function() {
	return {
		restrict: 'A',
        link: function (scope, element, attr) {
            var msg = attr.confirmClickMessage || "Oletko varma?";
            var clickAction = attr.confirmClick;
            element.bind('click',function (event) {
                if ( window.confirm(msg) ) {
                    scope.$apply(clickAction);
                }
            });
        }
	};
});