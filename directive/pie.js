angular.module('satest').directive('pie', function ($window) {
    return {
        restrict: 'EA',
        scope: {
            data: "=pie"
        },
        link: function (scope, element, attrs) {
            var chart = new google.visualization.PieChart(element[0]);

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

            scope.render = function (data) {
                if (!data) {
                    return;
                }

                // format data for chart
                var reduced = _.reduce(data, function (result, interpretation) {
                    result.dataRows.push([
                        interpretation.category,
                        interpretation._enabledCount
                    ]);
                    result.colors.push(interpretation.color);
                    return result;
                }, {dataRows: [], colors: []});

                // Create the data table.
                var chartData = new google.visualization.DataTable();
                chartData.addColumn('string', 'Category');
                chartData.addColumn('number', 'Answers');
                chartData.addRows(reduced.dataRows);

                // Set chart options
                var options = {'width': element[0].clientWidth, colors: reduced.colors};

                chart.draw(chartData, options);
            };
        }
    };
});