app.controller('kosarCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];

    DB.select('cartDetails', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
        $scope.summary = 0;
        $scope.tetelek.forEach(element => {
            $scope.summary += element.summary;
        });
    });

    $scope.deleteOrder = function(id) {
        $scope.modal = {
            Title: 'Rendelés törlése',
            Btn: 'Töröl',
            BtnColor: 'danger',
            mode: 3,
            pizzaID: id
        }
        DB.delete('carts', id).then(function(res) {
            $scope.pizza = res.data[0];
        });
    }
   
});