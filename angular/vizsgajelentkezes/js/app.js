let app = new angular.module('vizsgaAPP', ['ngRoute']);

app.run(function($rootScope) {
    $rootScope.title = 'AngularJS ngView példa';
    $rootScope.author = '2/14. szoftverfejlesztő';
    $rootScope.company = 'Bajai SZC Türr István Technikum';

    $rootScope.links = [{
            name: 'Főoldal',
            url: '/home'
        },
        {
            name: 'Jelentkezés',
            url: '/applictaion'
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
        .when('/applictaion', {
            templateUrl: 'views/jelentkezes.html',
            controller: 'ApplicationCtrl'
        })
        .when('/contacts', {
            templateUrl: 'views/contacts.html',
            controller: 'contactsCtrl'
        })
        .otherwise('/home')
});