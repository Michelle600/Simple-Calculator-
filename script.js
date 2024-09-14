function add() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber + secondNumber;
  alert('The result is:' + result);
}

function minus() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber - secondNumber;
  alert('The result is:' + result);
}

function divide() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber / secondNumber;
  alert('The result is:' + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt('Enter the first number:'));
  const secondNumber = parseFloat(prompt('Enter the second number:'));
  const result = firstNumber * secondNumber;
  alert('The result is:' + result);
}

function simpleInterest() {
  const principal = parseFloat(prompt('Enter the principal:'));
  const interestRate = parseFloat(prompt('Enter the interest rate:'));
  const timeInYears = parseFloat(prompt('Enter the time in years:'));
  const result = (principal * interestRate * timeInYears) / 100;
  alert('The simple interest result is:' + result);
}

function compoundInterest() {
  const principal = parseFloat(prompt('Enter the principal:'));
  const interestRate =
    parseFloat(prompt('Enter the annual interest rate (in %):')) / 100;
  const timesCompounded = parseInt(
    prompt('Enter the number of times interest is compounded per year:')
  );
  const timeInYears = parseFloat(prompt('Enter the time in years:'));
  const finalAmount =
    principal *
    Math.pow(1 + interestRate / timesCompounded, timesCompounded * timeInYears);
  const compoundInterest = finalAmount - principal;
  alert(`The compound interest is: ${compoundInterest.toFixed(2)}`);
  alert(
    `The final amount (principal + interest) is: ${finalAmount.toFixed(2)}`
  );
}
