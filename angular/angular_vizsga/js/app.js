let app = new angular.module('vizsgaAPP', ['ngRoute']);

app.run(function($rootScope) {
    $rootScope.title = 'VizsgaAPP';
    $rootScope.author = '2/14. szoftverfejlesztő';
    $rootScope.company = 'Bajai SZC Türr István Technikum';

    $rootScope.links = [{
            name: 'Bemutatkozás',
            url: '/home'
        },
        {
            name:"Login",
            url:'/login'
        },
        {
            name: 'Kapcsolat',
            url: '/contacts'
        }
       
        
    ];
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/contacts', {
            templateUrl: 'views/contacts.html',
            controller: 'contactsCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .otherwise('/home')
});