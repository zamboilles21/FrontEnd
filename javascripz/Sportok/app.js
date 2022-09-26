let form = document.querySelector('form'),
    removeBtn = document.querySelector('#torol'),
    fut = form.fut,
    fut_kal = form.fut_kal,
    foci = form.foci,
    foci_kal = form.foci_kal,
    bringa = form.bringa,
    bringa_kal = form.bringa_kal,
    hegy = form.hegy,
    hegy_kal = form.hegy_kal,
    lovag = form.lovag,
    lovag_kal = form.lovag_kal,
    tura = form.tura,
    tura_kal = form.tura_kal,
    kajak = form.kajak,
    kajak_kal = form.kajak_kal,
    suly = form.suly,
    suly_kal = form.suly_kal,
    ping = form.ping,
    ping_kal = form.suly_kal,
    kutya = form.kutya,
    kutya_kal=form.kutya_kal,
    oszzes=form.oszzes,
    oszzes_kal=form.oszzes_kal
    


    let sportok = [
        {nev:'fut', kcal: '680'},
        {nev:'foci', kcal: '550'},
        {nev:'bringa', kcal: '480'},
        {nev:'hegy', kcal: '420'},
        {nev:'lovag', kcal: '370'},
        {nev:'tura', kcal: '360'},
        {nev:'kajak', kcal: '340'},
        {nev:'suly', kcal: '320'},
        {nev:'ping', kcal: '270'},
        {nev:'kutya', kcal: '200'}
    ];
    
fut.addEventListener('change', ()=>{
    fut_kal.value = Math.round((sportok[0].kcal/60) * fut.value);
});

foci.addEventListener('change', ()=>{
    foci_kal.value = Math.round((sportok[1].kcal/60) * foci.value);
});

bringa.addEventListener('change', ()=>{
    bringa_kal.value = Math.round((sportok[2].kcal/60) * bringa.value);
});

hegy.addEventListener('change', ()=>{
    hegy_kal.value = Math.round((sportok[3].kcal/60) * hegy.value);
});

lovag.addEventListener('change', ()=>{
    lovag_kal.value = Math.round((sportok[4].kcal/60) * lovag.value);
});

tura.addEventListener('change', ()=>{
    tura_kal.value = Math.round((sportok[5].kcal/60) * tura.value);
});

kajak.addEventListener('change', ()=>{
    kajak_kal.value = Math.round((sportok[6].kcal/60) * kajak.value);
});

suly.addEventListener('change', ()=>{
    suly_kal.value = Math.round((sportok[7].kcal/60) * suly.value);
});

ping.addEventListener('change',()=>{
    ping_kal.value = Math.round((sportok[8].kcal/60) * ping.value);
});

kutya.addEventListener('change', ()=>{
    kutya_kal.value = Math.round((sportok[9].kcal/60) * kutya.value);
});
oszzes.addEventListener('change',()=>{
    oszzes_kal.value=Math.round(fut.value+foci.value+tura.value+kutya.value+ping.value+suly.value+kajak.value+lovag.value+hegy.value+bringa.value)
})