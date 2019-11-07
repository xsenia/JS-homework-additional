'use strict';

const funcNum = function (arr){ 
    //debugger;   
    let result = [];

    for (let i = 0; i < arr.length; i++) { 
        let sum = 0;
        let j = i + 1; 

        while (j < arr.length) {
            if(arr[i] > arr[j]) {
                sum += 1;
            }            
            j++;
            
        } 
        result[i] = sum;        
    }

    console.log(result);    
};

funcNum([15,1,2,3,0,12,4]);

funcNum([22,0,33,1,23,44,55]);

funcNum([55,33,22,11,3,1,66]);

