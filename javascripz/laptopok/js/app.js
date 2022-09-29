let laptopok=[];


let data= async () =>{ return await fetch('../laptopok.json').then(res=>res.json()).then(x=>x); }
async function load(){ laptopok = await getfile(); 

    let table=document.querySelector('#mytable');

laptopok.forEach(laptop=>{
    let tr=document.createElement('tr');

    let td1=document.createElement('td');
    td1.innerText=laptop.ID;
    tr.appendChild(td1);

    let td2=document.createElement('td');
    td2.innerText=laptop.brand;
    tr.appendChild(td2);

    let td3=document.createElement('td');
    td3.innerText=laptop.type;
    tr.appendChild(td3);

table.appendChild(tr);

});
load();
    




  
