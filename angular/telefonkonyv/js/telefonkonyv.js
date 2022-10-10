let app=new angular.module('phoneBookApp',[]);

app.controller('mainCtrl', function($scope){
    $scope.title='Telefonkönyv APP';
    $scope.company='TÜRR 2/14_SZFT';
    $scope.author='ZI';
    $scope.kategoriak=['Család','Barát','Rokon','Munka']
    $scope.ujadat={};

    $scope.adatok=angular.fromJson(window.localStorage.getItem('telefonkonyv'));
    if($scope.adatok==null){
        $scope.adatok=[];
    }
    $scope.hozzaadas=function(){
        if ($scope.ujadat.nev == '' || $scope.ujadat.telszam == '' || $scope.ujadat.kategoria =='' ) {
            $scope.message='Nincs minden adat megadva';
        }else{
            $scope.adatok.push({nev:$scope.ujadat.nev,telszam:$scope.ujadat.telszam,kategoria:$scope.ujadat.kategoria});
            window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok));
            $scope.ujadat={};
        }
        
    }

});