angular.module('satest').controller('UserCtrl',function($scope, User, Authentication){
    $scope.user = {email: ""};

    User.findAll()
        .then(function (users) {
            $scope.users = users;
        }, function (reason) {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe haettaessa käyttäjiä. Yritä uudelleen hetken kuluttua.' });
        });

    $scope.deleteUser = function(user) {
        User.destroy(user).then(function(deletedUser) {
            _.remove($scope.users, function(otherUser) {
                return user.id === otherUser.id;
            });
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe poistettaessa käyttäjää. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.newUser = function() {
        if ($scope.form.$invalid) {
            return;
        }
        User.create($scope.user).then(function(user) {
            $scope.user.email = "";
            $scope.alerts.push({ type: 'success', msg: 'Käyttäjä lisätty ja sähköposti salasanasta lähetetty.' });
            $scope.users.push(user);
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe luodessa käyttäjää. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.ownId = Authentication.getUserId();
});