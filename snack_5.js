var display = document.getElementById("display")

var palla = {
    nome : 'palla',
    peso : 10,
}

var content = '';
for(var key in palla){
    content += '<div><strong>' + key + ': </strong>' + palla[key] + '</div>';
}

display.innerHTML = content;