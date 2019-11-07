'use strict';

function getResult(a,b){
    let result = 0,
        pow,
        arr;
    pow = a**b;
    arr = pow.toString().split('');
    for(let i = 0; i < arr.length; i++){
        result += +arr[i];
    }
    return result;
  }

console.log(getResult(3, 10));

      


