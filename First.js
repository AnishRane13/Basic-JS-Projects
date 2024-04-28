let number = 6;
let arr = new Array;

for (let index = 1; index <= number; index++) {

  arr.push(index);
}

let sum = arr.reduce((accumulator, currentValue) => accumulator * currentValue)

console.log(sum)