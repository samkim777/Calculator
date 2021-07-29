

function operate(firstNum, secondNum, operator) {

    if (operator === '+') {
        return parseInt(firstNum) + parseInt(secondNum);
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
let secondlist = []
let operator = ['+', '-', '*', '/', '='];
let first;
let second;




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
        } else if (buttons[i].innerHTML === '+'){
            //Capture the 2nd list of numbers in each operator
            secondlist = numlist
            numlist = [] // clear first list
            secondlist.join('');
            console.log(secondlist);
        } else {
            numlist.push(buttons[i].innerHTML)
            display.innerHTML += buttons[i].innerHTML;
        }
    })
}





