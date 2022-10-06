let berek=[];

async function getfile(){
    return await fetch('berek2020.txt').then(res=>res.text()).then(res=>res.split('\n'));
}

async function load(){
   let adatok = await getfile();

    adatok.forEach(adat => {
        let object={
            "nev": adat.split(';')[0],
            "nem": adat.split(';')[1],
            "reszleg": adat.split(';')[2],
            "belepes": adat.split(';')[3],
            "ber": adat.split(';')[4]
        }
        berek.push(new Tberek(object));
    
    });

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
}
load();
   





