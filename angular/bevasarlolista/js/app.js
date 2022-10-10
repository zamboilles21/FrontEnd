let app=new angular.module('shoppingListAPP',[]);
app.controller('mainCtrl', function($scope){
    $scope.title='Shoppinglist APP';
    $scope.company='TÜRR 2/14_SZFT';
    $scope.author='ZI';
    $scope.ujadat={};

    $scope.adatok=angular.fromJson(window.localStorage.getItem('bevasarlolista'));
    if($scope.adatok==null) $scope.adatok=[];

    $scope.hozzaadas=function(){
        if ($scope.ujadat.nev == '' || $scope.ujadat.mennyiseg == '' || $scope.ujadat.ar =='' ) {
            $scope.message='Nincs minden adat megadva';
        }else{
            $scope.adatok.push({nev:$scope.ujadat.nev,mennyiseg:$scope.ujadat.mennyiseg,ar:$scope.ujadat.ar});
            window.localStorage.setItem('bevasarlolista', angular.toJson($scope.adatok));
            $scope.ujadat={};
        }

        $scope.torles = function(ID) {
            let idx = $scope.adatok.findIndex(item => item.ID == ID);
            $scope.adatok.splice(idx, 1);
            window.localStorage.setItem('bevasarlolista', angular.toJson($scope.adatok));
        }
    }
});