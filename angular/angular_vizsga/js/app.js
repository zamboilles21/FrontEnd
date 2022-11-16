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
        {
            Name:'Vizsgabejelentés',
            url:'/vizsgabejelentes'
        },
        {
            Name:'Vizsgajelentkezés',
            url:'/vizsgajelentkezes'
        }
        
       
        
    ];
    
    $rootScope.hours = [
        { nr: 0, start: '07:15', end: '07:55' },
        { nr: 1, start: '08:00', end: '08:45' },
        { nr: 2, start: '08:55', end: '09:40' },
        { nr: 3, start: '09:50', end: '10:35' },
        { nr: 4, start: '10:50', end: '11:35' },
        { nr: 5, start: '11:45', end: '12:30' },
        { nr: 6, start: '12:40', end: '13:25' },
        { nr: 7, start: '13:30', end: '14:05' },
        { nr: 8, start: '14:06', end: '15:25' }
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
        .when('/vizsgabejelentes', {
            templateUrl: 'views/Vizsgabejelentes.html',
            controller: 'bejelentesCtrl'
        })
        .when('/vizsgajelentkezes', {
            templateUrl: 'views/vizsgajelentkezes.html',
            controller: 'jelentkezesCtrl'
        })
        .otherwise('/home')
});
function myFunction() {
    alert("Köszönjük a jelentkezését!");
  }

