'use strict';

let num01   = document.getElementById('a'),
    num02   = document.getElementById('b'),
    btnSum  = document.getElementById('sum'),
    btnMult = document.getElementById('mult'),
    result  = document.getElementById('res');

const calculator = {
    res: 0,
    sum: function(){
        let sumRes = +num01.value + +num02.value;
        this.res = sumRes;
        this.show();
    },
    mult: function(){
        let multRes = +num01.value * +num02.value;
        this.res = multRes;
        this.show();
    },    
    show: function(){
        result.value = this.res;        
    }
}

btnSum.addEventListener('click',()=>{
    calculator.sum();
});

btnMult.addEventListener('click',()=>{
    calculator.mult();
});
      


