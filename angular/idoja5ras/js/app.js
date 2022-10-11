let app=new angular.module('wheatherApp',[]);

app.controller('mainCtrl', function($scope){
    $scope.title='IdőjárásAPP';
    $scope.company='TÜRR 2/14_SZFT';
    $scope.author='ZI';
    $scope.kategoriak=['Napsütés','Borult','Eső','Jégeső','Havazás']

    $scope.ujadat={};

    $scope.adatok=angular.fromJson(window.localStorage.getItem('idojaras'));
    if($scope.adatok==null) $scope.adatok=[];

    $scope.hozzaadas=function(){
        if ($scope.ujadat.nap == '' || $scope.ujadat.min == '' || $scope.ujadat.max =='' ) {
            $scope.message='Nincs minden adat megadva';
        }else{
            $scope.adatok.push({nap:$scope.ujadat.nap,min:$scope.ujadat.min,max:$scope.ujadat.max,kategoria:$scope.ujadat.kategoria});
            window.localStorage.setItem('idojaras', angular.toJson($scope.adatok));
            $scope.ujadat={};
        }
        
    }
});