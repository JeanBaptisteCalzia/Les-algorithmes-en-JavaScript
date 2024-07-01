//votre code ici
function pairNumbers(a, b) {
  // Initializing numbers array
  let numbers = [];
  // Declaring empty evenNumbers array
  let evenNumbers = [];

  for (let i = a; i < b + 1; i++) {
    numbers.push(i);
  }

  numbers.forEach((element) => {
    if (element % 2 == 0) {
      evenNumbers.push(element);
    }
  });

  return evenNumbers.toString();
}

const displayNumber = pairNumbers(1, 10);
console.log(displayNumber);

export default pairNumbers;
