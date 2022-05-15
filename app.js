const inputNumber = document.querySelector('#input-number');
const inputBtn = document.querySelector('#input-submit');
const result = document.querySelector('#result-p');


function fizzBuzz(x) {
  x++
  let outputStr = '';
  for (let index = 1; index < x; index++) {
    parStr = index;
    if (index % 3 == 0 && index % 5 == 0) {
      parStr = 'FizzBuzz';
    } else if (index % 3 == 0) {
      parStr = 'Fizz';
    } else if (index % 5 == 0) {
      parStr = 'Buzz';
    } else {
      parStr = index;
    }
    outputStr = outputStr + parStr + '<br>';
  }
  return outputStr;
}


inputBtn.addEventListener('click', () => {
  result.innerHTML = fizzBuzz(inputNumber.value);
}); 


console.log(result.value);
console.log(inputNumber.value);


