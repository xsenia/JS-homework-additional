'use strict';
let topPos = 10, leftPos = 10;
    
function DomElement(selector, height, width, bg, fontSize) {    
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createTag = function() {    
    let selector = this.selector;
    let div = document.createElement(selector);  
    document.body.append(div);
    div.style.cssText='height:' + this.height + 'px;background-color: ' + this.bg +';width:' + this.width + 'px;position:absolute;';     
};

DomElement.prototype.moveDiv = function(event) {    
    switch(event.key) {
        case 'ArrowUp': 
            topPos -= 10;
            break;
        case 'ArrowDown':
            topPos += 10;
            break;        
        case 'ArrowLeft':
            leftPos -= 10;
            break;        
        case 'ArrowRight': 
        leftPos += 10;
            break;
        default:
            break;
    }
    let div = document.querySelector('div');
    div.style.cssText += `top: ${topPos}px; left: ${leftPos}px;`;
};

let domElement = new DomElement('div', 100, 100, 'silver', 24);

document.addEventListener("DOMContentLoaded", domElement.createTag());

document.addEventListener('keydown', (event) => {
    domElement.moveDiv(event);
});