let app=new angular.module('PizzaAPP',[]);

app.run(function($rootScope){
    $rootScope.settings={};
    $rootScope.settings.appTitle='MammaMia Pizzéria';
    $rootScope.settings.company='Türr István Teckbikum';
    $rootScope.settings.author='2/14 SZFT';
})