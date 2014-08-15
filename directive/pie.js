angular.module('satest').directive('pie', function ($window) {
    return {
        restrict: 'EA',
        scope: {
            data: "=pie"
        },
        link: function (scope, element, attrs) {

            var canvas = angular.element('<canvas>');
            element.append(canvas);
            var context = canvas[0].getContext('2d');

            angular.element($window).on('resize', function () {
                scope.$apply();
            });

            scope.$watch(function () {
                    return angular.element($window)[0].innerWidth;
                }, function () {
                    scope.render(scope.data);
                }
            );

            // watch for data changes and re-render
            scope.$watch('data', function (newVals, oldVals) {
                scope.render(newVals);
            }, true);

            //clean up
            element.on('$destroy', function () {
                angular.element($window).off('resize');
            });



            // define render function
            scope.render = function (data) {
                if (!data) {
                    return;
                }

                var dataFormatted = _.reduce(data, function(result, interpretation) {
                    result.push({
                        value: interpretation._enabledCount,
                        color: interpretation.color,
                        _category: interpretation.category
                    });
                    return result;
                }, []);

                var pieChart = new Chart(context).Pie(dataFormatted, {
                    animateRotate : false
                });

                canvas.on('click', function(evt){
                    var activePoints = pieChart.getSegmentsAtEvent(evt);
                    console.log(activePoints)
                    // => activePoints is an array of segments on the canvas that are at the same position as the click event.
                });

                //TODO remove click listener also
            };
        }
    };
});