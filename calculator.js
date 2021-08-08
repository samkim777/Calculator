

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
        if (buttons[i].innerHTML === 'AC') {
            firstnumber = ''
            secondnumber = ''
            curoperator = ''
            clicked = 0
        }
        if (clicked === 0) {
            if (savesolution === '') {
                firstnumber += buttons[i].innerHTML
                console.log(firstnumber);
                display.innerHTML = firstnumber
            } else {
                firstnumber = solution
                console.log(firstnumber);
                display.innerHTML = firstnumber
                // We never access this section why?
                // actually we never access this whole part besides the very first time
                // there must be an issue resetting clicked 
            }
        }
        if (operator.includes(buttons[i].innerHTML)) {
            clicked++;
            curoperator = buttons[i].innerHTML
            console.log(curoperator);
            display.innerHTML = ''
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 1) {
            secondnumber += buttons[i].innerHTML
            console.log(secondnumber);
            console.log(firstnumber); // incorrect assigning of first number
            operate(firstnumber, secondnumber, curoperator)
            console.log(solution);
            display.innerHTML = secondnumber
        }
        if (operator.includes(buttons[i].innerHTML) && clicked === 2) {
            savesolution = solution
            console.log(savesolution);
            secondnumber = ''
            console.log(solution);
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 2) {
            firstnumber = solution
            secondnumber += buttons[i].innerHTML
            operate(firstnumber, secondnumber, curoperator)
            console.log(firstnumber);
            secondnumber = ''
            console.log(solution);
            clicked = 0
            console.log(clicked);
        }
        else {
            if (!operator.includes(buttons[i].innerHTML)) {
                display.innerHTML = buttons[i].innerHTML
            }
        }
        // todo: implement '=' 
        //     : Implement other buttons
        //     : implement decimals and percentages
        
        //     : work on design
    })
}

