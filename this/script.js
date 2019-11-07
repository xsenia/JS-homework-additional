// 'use strict';

// function test(){
//     console.log('hi', this);
// }

// window.test();

/***************/

let obj = {
    x: 10,
    y: 15,
    test: newTest
};

function newTest(){
    console.log('hi', this);
}

obj.test();
newTest();