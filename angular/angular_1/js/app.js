let app=new angular.module('peldaApp',[]);

app.controller('mainCtrl', function($scope){
    $scope.title='Ez az első!';
    $scope.company='Baja Türr'
    $scope.author='ZI';
   
    $scope.links=[
        {
            name:"főoldal",
            url:"/home"
        },
        {
            name:"felhasznalo",
            url:"/users"
        },
        {
            name:"lsdkgn",
            url:"/valami"
        }
    ];


    $scope.laptops = [
        {
            "ID": 1,
            "brand": "HP",
            "type": "650",
            "description": "serfgdfgsdfgwertwert",
            "price": 350000
        },
        {
            "ID": 2,
            "brand": "Lenovo",
            "type": "Thinkpad T410",
            "description": "Intel Core i5\r\n12GB RAM\r\n128GB SSD\r\nWindows 10 Pro\r\n",
            "price": 186000
        },
            {"ID":4,
            "brand":"Acer",
            "type":"Nitro 5",
            "description":"Gamer\r\nI5\r\n1650\r\n16GB\r\n256GB+1TB",
            "price":225000
        },
        {
            "ID": 3,
            "brand": "Acer",
            "type": "Travelmate 500",
            "description": "AMD Rysen 5, 8GB RAM, 512 GB SSD, Windows 10",
            "price": 195000
        },
        {
            "ID": 5,
            "brand": "Acerrrrrreeeee",
            "type": "Travelmate 5000000",
            "description": "AMD Rysen 5, 8GB RAM, 512 GB SSD, Windows 10",
            "price": 195000
        }
    ]
});