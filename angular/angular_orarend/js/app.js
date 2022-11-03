var app=new angular.module('orarendAPP',[]);

app.controller('mainCtrl',function($scope){
    $scope.title='Órarend APP';
    $scope.author = '2/14. szoftverfejlesztő';
    $scope.company = 'Bajai SZC Türr István Technikum'

    $scope.hours=[0,1,2,3,4,5,6,7,8];
    $scope.days=['hetfő',"kedd","szerda","Csütötök","Péntek"];
    $scope.subjects=[
        {
            name:'Frontend',
            teacher:'NSZ',
            room:'308',
            color:'rgb(12,55,125)'
        },
        {
            name:'BackENd',
            teacher:'NSZ',
            room:'308',
            color:'rgb(12,55,125)'
        },
        {
            name:'IKT',
            teacher:'FZ',
            room:'100',
            color:'rgb(69,101,122)'
        },
        {
            name:'Asztali',
            teacher:'TP',
            room:'311',
            color:'rgb(66,97,102)'
        },
        {
            name:'Adatbazis',
            teacher:'TP',
            room:'311',
            color:'rgb(66,97,102)'
        }
       
    ]
})