

function operate(firstNum, secondNum, operator) {
    if (operator === '+') {
        return firstNum + secondNum;
    } else if (operator === '-') {
        return firstNum - secondNum 
    } else if (operator === '*') {
        return firstNum * secondNum
    } else if (operator === '/') {
        if (secondNum !== 0) {
            return firstNum / secondNum
        } else return 'Cannot divide by a 0!';
    }
}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')




// Display the corresponding number / operations
for (let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', function(){
        display.innerHTML = buttons[i].innerHTML
    })
}



