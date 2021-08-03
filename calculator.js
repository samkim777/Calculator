

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
let first = '';
let second = '';
let opercount = 0;
let calculate = false;
let curoperator;
let results;




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
        }
        else if (operator.includes(buttons[i].innerHTML) && !calculate) {
            calculate = true
            curoperator = buttons[i].innerHTML


        }
        else if (!calculate) {
            display.innerHTML += buttons[i].innerHTML
            if (results === undefined) {
                first += buttons[i].innerHTML
            }
        } else {
            second += buttons[i].innerHTML // second is initialized as undefined
            console.log(typeof parseInt(second));
            console.log(operate(parseInt(first), parseInt(second), curoperator));
            results = operate(parseInt(first), parseInt(second), curoperator)
            if (operator.includes(buttons[i].innerHTML)) {
                first += results // save latest result
                curoperator = buttons[i].innerHTML
                calculate = false
                console.log(first)
            }
            // works the first time but not continous
        }
    })
}
// 3 * 2 display 6
// 3 * 21 display 63
// 
