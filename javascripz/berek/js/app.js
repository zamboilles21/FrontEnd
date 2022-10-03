let berek=[];



let table=document.querySelector('#mytable');

berek.forEach(ber=>{
    let tr=document.createElement('tr');

    let td1=document.createElement('td');
    td1.innerText=ber.nev;
    tr.appendChild(td1);

    let td2=document.createElement('td');
    td2.innerText=ber.nem;
    tr.appendChild(td2);

    let td3=document.createElement('td');
    td3.innerText=ber.reszleg;
    tr.appendChild(td3);

table.appendChild(tr);

});
load();
    





