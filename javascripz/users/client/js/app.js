const { json } = require("body-parser");

async function GetUsers(){
    let url='http://localhost:8081/users';
    try {
        let res=await fetch(url)
        return await res,json();
    } catch (error) {
        console.log(error);
    }
}



GetUsers();