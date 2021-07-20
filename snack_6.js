var display = document.getElementById("display");
var inputPeso = document.getElementById('weight');
var button = document.getElementById('button');

var palla = {
    nome : 'palla',
    peso : 10,
}

printObject(palla,display);

button.addEventListener('click',function(){
    var nuovoPeso = inputPeso.value;
    if(!nuovoPeso || isNaN(nuovoPeso) || nuovoPeso.trim() === ''){
        alert('valore non valido');
        return;
    }
    palla.peso = parseInt(nuovoPeso);
    printObject(palla,display);
});


// FUNCTIONS
function printObject(obj, targetElement){
    var content = '';
    for(var key in obj){
    content += '<div><strong>' + key + ': </strong>' + obj[key] + '</div>';
}

targetElement.innerHTML = content;
}