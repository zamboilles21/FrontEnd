app.controller('kosarCtrl', function($scope, $rootScope, DB) {
    $scope.tetelek = [];

    DB.select('cartDetails', 'userID', $rootScope.loggedUser.ID).then(function(res) {
        $scope.tetelek = res.data;
        $scope.summary = 0;
        $scope.tetelek.forEach(element => {
            $scope.summary += element.summary;
        });
    });


    $scope.ordering = function() {

        let data = {
            userID: $rootScope.loggedUser.ID,
            userName: $rootScope.loggedUser.name,
            userAddress: $rootScope.loggedUser.address,
            userPhone: $rootScope.loggedUser.phone,
            summary: $scope.summary
        }

        DB.insert('orders', data).then(function(res) {
            if (res.data.affectedRows != 0) {
                let orderID = res.data.insertId;

                $scope.tetelek.forEach(tetel => {
                    data = {
                        orderID: orderID,
                        pizzaID: tetel.pizzaID,
                        pizzaName: tetel.name,
                        amount: tetel.amount,
                        price: tetel.price
                    }
                    DB.insert('orderItems', data);
                });

                DB.delete('carts', 'userID', $rootScope.loggedUser.ID).then(function() {
                    alert("A megrendelést rögzítettük!");
                    $scope.tetelek = [];
                    $scope.summary = 0;
                    $rootScope.itemsInCart = 0;
                });
            }
        });
    }
});