

function operate(firstNum, secondNum, operator) {
    if (firstNum === undefined || secondNum === undefined) {

    } else {
        if (operator === '+') {
            return parseInt(firstNum) + parseInt(secondNum);
        } else if (operator === '-') {
            return parseInt(firstNum) - parseInt(secondNum)
        } else if (operator === '*') {
            return firstNum * secondNum
        } else if (operator === '/') {
            if (secondNum !== 0) {
                return firstNum / secondNum
            } else return 'Cannot divide by a 0!';
        }
    }

}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')
let numlist = [];
let secondlist = []
let operator = ['+', '-', '*', '/', '='];
let first = [];
let second = [];
let opercount = 0;
let lastoperator;
let fields;
let count;
let pressed;



// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerHTML === 'AC') {
            display.innerHTML = '';
            numlist = [];
            secondlist = [];
        }
        else if (buttons[i].innerHTML === 'DEL') {
            // get rid of last number
            numlist.splice(numlist.length - 1)
            display.innerHTML = numlist.join('')
        } else if (operator.includes(buttons[i].innerHTML)) {
            pressed = buttons[i].innerHTML
            count++;
            numlist.push(buttons[i].innerHTML)
            // need to store previous calculated value for current use
            
        }
        else {
            if (count > 1) {
                lastoperator = numlist.pop() // save latest operator
                fields = numlist.split(pressed) // split numlist by operator
                console.log(operate (fields[0],fields[1],pressed));
                

            }
            numlist.push(buttons[i].innerHTML)
            display.innerHTML += buttons[i].innerHTML;
        }
    })
}

