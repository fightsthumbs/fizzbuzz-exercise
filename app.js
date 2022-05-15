const inputNumber = document.querySelector('#input-number');
const inputBtn = document.querySelector('#input-submit');
const result = document.querySelector('#result-p');


function fizzBuzz(x) {
  x++
  let outputStr = '';
  for (let index = 1; index < x; index++) {
    parStr = index;
    if (index % 3 == 0 && index % 5 == 0) {
      parStr = '<span class="red">FizzBuzz</span>';
    } else if (index % 3 == 0) {
      parStr = '<span class="green">Fizz</span>';
    } else if (index % 5 == 0) {
      parStr = '<span class="blue">Buzz</span>';
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


