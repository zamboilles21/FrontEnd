var app = new angular.module('vizsgaApp', []);

app.controller('mainCtrl', function($scope,$window,$timeout) {
    $scope.title = 'Vizsgajelentkezes';
    $scope.company = 'Bajai SZC Türr István Technikum';
    $scope.author = '2/14. szft';
    
})