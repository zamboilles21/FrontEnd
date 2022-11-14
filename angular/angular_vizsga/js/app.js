let app = new angular.module('vizsgaAPP', ['ngRoute']);

app.run(function($rootScope) {
    $rootScope.title = 'VizsgaAPP';
    $rootScope.author = '2/14. szoftverfejlesztő';
    $rootScope.company = 'Bajai SZC Türr István Technikum';
    $rootScope.vizsgatipusok=['Záró vizsga','ZH','Részvizsga','Kimeneti vizsga','Belső vizsga']

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
        },
        
       
        
    ];
    $rootScope.ujadat={};

    $rootScope.adatok=angular.fromJson(window.localStorage.getItem('Vizsga'));
    if($rootScope.adatok==null) $rootScope.adatok=[];

    $rootScope.hozzaadas=function(){
        if ($rootScope.ujadat.viszganeve == '' || $rootScope.ujadat.vizsgahely == '' || $rootScope.ujadat.vizsgatipus =='' || $rootScope.ujadat.vizsgaidopont=='' ) {
            $rootScope.message='Nincs minden adat megadva';
        }else{
            $rootScope.adatok.push({viszganeve:$rootScope.ujadat.viszganeve,vizsgahely:$rootScope.ujadat.vizsgahely,vizsgatipus:$rootScope.ujadat.vizsgatipus, vizsgaidopont:$rootScope.ujadat.vizsgaidopont });
            window.localStorage.setItem('Vizsga', angular.toJson($rootScope.adatok));
            $rootScope.ujadat={};
        }
        
    }

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


