var userNumber

var numbers = []

 i = 0;
do {
    userNumber = parseInt(prompt('inserisci un numero: '));
    numbers.push(userNumber);
    i++;
  }
    while (i < 5);

console.log(userNumber)
console.log(numbers)

var sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
 

