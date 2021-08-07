

function operate(firstNum, secondNum, operator) {
    if (operator === '+') {
        solution = parseInt(firstNum) + parseInt(secondNum);
    } else if (operator === '-') {
        solution = parseInt(firstNum) - parseInt(secondNum)
    } else if (operator === '*') {
        solution = firstNum * secondNum
    } else if (operator === '/') {
        if (secondNum !== 0) {
            solution = firstNum / secondNum
        } else return 'Cannot divide by a 0!';
    }

}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')
let numlist = [];
let secondlist = []
let operator = ['+', '-', '*', '/', '='];
let firstnumber = '';
let secondnumber = '';
let opercount = 0;
let clicked = 0;
let curoperator;
let solution = ''
let savesolution = ''




// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (!operator.includes(buttons[i].innerHTML) && clicked === 0) {
            if (savesolution === '') {
                firstnumber += buttons[i].innerHTML
            } else {
                firstnumber = solution
            }
        }
        if (operator.includes(buttons[i].innerHTML)) {
            clicked++;
            curoperator = buttons[i].innerHTML
            console.log(curoperator);
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 1) {
            secondnumber += buttons[i].innerHTML
            console.log(secondnumber);
            operate(firstnumber, secondnumber, curoperator)
            console.log(solution);

        }
        if (operator.includes(buttons[i].innerHTML) && clicked === 2) {
            savesolution = solution
            secondnumber = ''
            console.log(solution);
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 2) {
            firstnumber = solution
            secondnumber+= buttons[i].innerHTML
            operate(firstnumber,secondnumber,curoperator)
            console.log(firstnumber);
            secondnumber = ''
            console.log(solution);
            clicked = 0
        }
        else {
            display.innerHTML += buttons[i].innerHTML
        }
    })
}

