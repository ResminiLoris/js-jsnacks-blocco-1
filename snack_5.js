var display = document.getElementById("display")

var palla = {
    nome : 'palla',
    peso : 10,
}



function printObject(obj, targetElement){
    var content = '';
    for(var key in obj){
    content += '<div><strong>' + key + ': </strong>' + obj[key] + '</div>';
}

targetElement.innerHTML = content;
}

var userPeso = prompt('inserisci il nuovo peso', '0');
while(!userPeso || isNaN(userPeso) || userPeso.trim() === ''){
    userPeso = prompt('inserisci il nuovo peso', '0');
}

palla.peso = parseInt(userPeso);

printObject(palla,display);