

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
let numlist = [];




// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerHTML === 'AC') {
            display.innerHTML = '';
            numlist = [];
        }
        else if (buttons[i].innerHTML === 'DEL') {
            // get rid of last number
        }
        else {
            // probably split where operators are and add the two sums in the function operate
            display.innerHTML += buttons[i].innerHTML
            numlist.push(buttons[i].innerHTML);
            console.log(numlist);
        }
    })
}





