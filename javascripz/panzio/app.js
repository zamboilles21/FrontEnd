let felveszBtn = document.querySelector('#felveszBtn'),
    form = document.querySelector('form')
    szobak = Array.prototype.slice.call(document.getElementsByName('K1'))


foglalasok = [];

if (adatok = localStorage.getItem('foglalasok')) {
    foglalasok = JSON.parse(adatok)
 }
 felveszBtn.addEventListener('click', () => {
    if (erkez.value == "" || tavoz.value == "")
    {
        alert('A mezők kitöltése kötelező!')
    }else{
        foglalas = {
            'erkezes': erkez.value,
            'tavozas': tavoz.value,
            'K1': getValue(szobak),
        }
        foglalasok.push(foglalas)
        localStorage.setItem('foglalasok', JSON.stringify(foglalasok))
        alert(`Foglalás felvéve`);
    }  

})
function getValue(arr) {
    for(i = 0; i < arr.length; i++){
        if (arr[i].checked) return arr[i].value
    }
    return null
}