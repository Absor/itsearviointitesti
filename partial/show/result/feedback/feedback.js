angular.module('satest').controller('FeedbackCtrl',function($scope, Feedback){
    $scope.feedback = {};

    $scope.feedbackSent = false;

    $scope.sendFeedback = function() {
        if ($scope.form.$invalid) {
            return;
        }

        Feedback.create($scope.feedback).then(function() {
            $scope.feedbackSent = true;
        }, function() {
            // TODO error
        });
    };
});