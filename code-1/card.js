//Print only characters from   "Credit bill $123.56"

let card_number = "Credit bill $123.56"
let card_number1 = "Credit bill payment 1 $123.56"
let card_number2 = "Credit bill payment 1 E12343.56"
NaN


const cardNumber = "Credit bill $123.56";
let numberOnly = "";

for (let i = 0; i < cardNumber.length; i++) {
  const char = cardNumber[i];
  if (!isNaN(char) || char === ".") {
    numberOnly += char;
  }
}

if (numberOnly) {
  console.log('Number:', numberOnly);
} else {
  console.log('No number found in the string.');
}