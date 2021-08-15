function operate(firstNum, secondNum, operator) {
    if (operator === '+') {
        solution = Number(firstNum) + Number(secondNum);
    } else if (operator === '-') {
        solution = Number(firstNum) - Number(secondNum)
    } else if (operator === '*') {
        solution = firstNum * secondNum
    } else if (operator === '/') {
        if (secondNum !== 0) {
            solution = firstNum / secondNum
        } 
    }

}


let display = document.querySelector('#screen')
let buttons = document.querySelectorAll('div.grid-item')
let operator = ['+', '-', '*', '/'];
let specialoperators = ['%', 'AC', 'DEL', '='];
let firstnumber = '';
let secondnumber = '';
let clicked = 0;
let curoperator = '';
let solution = ''
let savesolution = ''
let currentnumber = '';
let percent = '';





// Display the corresponding number / operations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].innerHTML === 'AC') {
            firstnumber = ''
            secondnumber = ''
            curoperator = ''
            clicked = 0
            display.innerHTML = ''
            solution = ''
            savesolution = ''
        }
        if (clicked === 0 || buttons[i].innerHTML === '=') {
            if (savesolution === '') {
                if (!operator.includes(buttons[i].innerHTML)) {
                    if (!specialoperators.includes(buttons[i].innerHTML)) {
                        firstnumber += buttons[i].innerHTML
                    }
                    currentnumber = firstnumber // keep track of which number we're on
                }
                

            } else {
                firstnumber = solution
                currentnumber = firstnumber
                


            }
        }
        if (operator.includes(buttons[i].innerHTML)) {
            clicked++;
            curoperator = buttons[i].innerHTML
            display.innerHTML = ''
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 1 && !specialoperators.includes(buttons[i].innerHTML)) {
            if (!specialoperators.includes(buttons[i].innerHTML)) {
                secondnumber += buttons[i].innerHTML // check against adding operators to number string
            }
            currentnumber = secondnumber
            // incorrect assigning of first number
            operate(firstnumber, secondnumber, curoperator)

        }
        if (operator.includes(buttons[i].innerHTML) && clicked === 2) {
            savesolution = solution
            secondnumber = ''
        }
        if (!operator.includes(buttons[i].innerHTML) && clicked === 2 && !specialoperators.includes(buttons[i].innerHTML)) {
            firstnumber = solution
            clicked--;
            if (!specialoperators.includes(buttons[i].innerHTML)) {
                secondnumber += buttons[i].innerHTML // check against adding operators to number string
            }
            currentnumber = secondnumber
            operate(firstnumber, secondnumber, curoperator)
            
            
            // want to keep chain of numbers until we want another operator
            
        }
        if (clicked === 3 && !specialoperators.includes(buttons[i].innerHTML)) {
            operate(firstnumber, secondnumber, curoperator)
            clicked = 0 
            secondnumber = ''
        }

        switch (buttons[i].innerHTML) {
            case '=':
                display.innerHTML = solution
                break;

            case 'DEL':
                // might need to save first or second number to erase from
                if (clicked === 0) {
                    // delete first number before the first operator
                    firstnumber = firstnumber.replace(firstnumber.substr(firstnumber.length - 1), '')
                } else if (clicked === 1 && secondnumber === '') {
                    // with one operator and second number yet typed, delete the operator
                    curoperator = ''
                    clicked-- // indicate that the operator is now gone
                } else {
                    // else delete second number
                    secondnumber = secondnumber.replace(secondnumber.substr(secondnumber.length - 1), '')
                }
                break;

            case '%':
                percent = currentnumber / 100
                if (clicked === 0) {
                    firstnumber = percent;
                    display.innerHTML = firstnumber
                } else {
                    secondnumber = percent;
                    display.innerHTML = secondnumber
                }
                break;

            case '.':
                currentnumber += '.'
                break;

            case '00':
                currentnumber * 100;
                break;
        }


        if (!operator.includes(buttons[i].innerHTML) && !specialoperators.includes(buttons[i].innerHTML)) {
            display.innerHTML += buttons[i].innerHTML

        }
    })
}
