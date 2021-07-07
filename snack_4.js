var lista1 = ['1','45','12','9'];
var lista2 = ['5','85','2','6','12','63'];

while (lista1.length !== lista2.length){
    var random = Math.floor(Math.random() * 100) + 1;

    if(lista1.length > lista2.length){
        lista2.push(random)
    }else{
        lista1.push(random)

    }
}
console.log(lista1)
console.log(lista2)
console.log('le liste hanno uguale lunghezza');