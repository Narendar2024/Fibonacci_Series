// let userInput = prompt("Enter a Number");
// let number = parseInt(userInput);
// if (!isNaN(number)) {
//   let result = factorial(number);
//   console.log(`The factorial of ${number} is ${result}`);
// } else {
//   console.log(`${userInput} is a Invalid`);
// }

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

function calculateFactorial() {
  let userInput = document.getElementById("userInput").value;
  let number = parseInt(userInput);
  let resultElement = document.getElementById("result");

  if (!isNaN(number)) {
    let result = factorial(number);
    resultElement.textContent = `The factorial of ${number} is ${result}`;
  } else {
    resultElement.textContent = `${number} is Invalid`;
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
}
