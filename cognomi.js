var firstNames = ['loris','lex','simo','leo','fred'];
var lastNames = ['resmini','melis','parma'];
var fakeInvites = [];

while (fakeInvites.length < 3){
    var randNumb1 = Math.floor(Math.random() * firstNames.lenght);
    var randNumb2 = Math.floor(Math.random() * lastNames.lenght);
    var randomFirstName = firstNames[randNumb1];
    var randomLastName = lastNames[randNumb2];

    var fullName = randomFirstName + '' + randomLastName;
    console.log('reindirizzo: ', fullName);

    if (!fakeInvites.includes(fullName)) {
        console.log('inserito: ', fullName);
        fakeInvites.push(fullName);
    }
}
console.log(fakeInvites);