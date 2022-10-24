let app = new angular.module('kerteszet', ['ngRoute']);

app.run(function($rootScope){
    $rootScope.title='AngularJS ngView';
    $rootScope.author='2/14 SZFT';
    $rootScope.company='Türr'

    $rootScope.links=[{
        name:'Bemutatkozas',
        url:'/home'
    },
    {
        name:'Munkáink',
        url:'/referncies'
    },
    {
        name:'Szolgaltatsok',
        url:'/services'
    },
    {
        name:'Kapcsolat',
        url:'/contacts'
    }]
});

app.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl:'views/home.html',
        controller:'homectrl'
    })
    .when('/referncies', {
        templateUrl:'views/referncies.html',
        controller:'refernciesctrl'
    })
    .when('/services', {
        templateUrl:'views/services.html',
        controller:'servicesctrl'
    })
    .when('/contacts', {
        templateUrl:'views/contacts.html',
        controller:'contactsctrl'
    })

});

