const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const percentButton = document.querySelector('.percent');
const equalsButton = document.querySelector('.equals');
const firstDisplay = document.querySelector('.display1');
const secondDisplay = document.querySelector('.display2');

let num1 = '';
let num2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberButtons.forEach(number =>{
    number.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){         // Check if dot is clicked & wether there is a dot in the number, if not add dot.
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){    //If there is a dot, return. So don't add dot
            return;
        }
        num2 += e.target.innerText;                         // Pass the clicked number to variable num2
        secondDisplay.innerText = num2;                     // Display num2 in second display
    })
})

operatorButtons.forEach( operation => {
    operation.addEventListener('click', (e) =>{
        if(!num2){                                          //Checks if the is a number to preform operation on
            return;
        }
        haveDot = false;                                    //Sets haveDot back to false, so num1 1 can contain a dot.
        const operationName = e.target.innerText;
        if(num1 && num2 && lastOperation){                  //Check if there are two numbers and operator to preform calculate
            calculate();
        }else{
            result = parseFloat(num2);                      // num2 is a string, convert to number
        }
        clearScreen2(operationName)
        lastOperation = operationName;
    })
})

const clearScreen2 = (name = '') =>{                     // Passes the number and operator to top screen
    num1 += num2 + ' ' + name + ' ';
    firstDisplay.innerText = num1;              
    secondDisplay.innerText = '';                       //Clear the second display
    num2 = '';                                          //Clear the num2 variable


}

const calculate = () =>{
    if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(num2);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(num2);
    }else if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(num2);
    }else if(lastOperation === '÷'){
        if(num2 === '0'){
            result ='Cannot divide by 0 mate.';
        }else{
        result = parseFloat(result) / parseFloat(num2);
        }
    }else if(lastOperation === '%'){
        result = parseFloat(result) % parseFloat(num2);
    };
    console.log(result)
}
  

equalsButton.addEventListener('click', (e) => {
    if(!num1 || !num2){
        return;
    }
    haveDot = false;
    calculate();
    clearScreen2()
    secondDisplay.innerText = result;
    num2 = '';
    num1 = '';

})


allClearButton.addEventListener('click', () => {
    allClear();
})


const allClear = () =>{
    firstDisplay.innerText = '0';
   secondDisplay.innerText = '0';
    num1 = '';
    num2 = '';
    lastOperation = '';
    result = '';   
};

deleteButton.addEventListener('click', () => {
    del();
})

const del = () =>{
    let current =secondDisplay.innerText;
    secondDisplay.innerText = current.slice(0, -1)

    num2 = secondDisplay.innerText ;
};


/*



const equals = (num1, num2, operator) =>{
   const result = operate(num1, num2, operator);
   updateDisplay(result);
   console.log(equals)
};


const operate = (a, b, oper) => {
    switch(oper){
        case '+':
          return add(a,b);
            break;
        case '-':
          return  subtract(a,b);
            break;
        case '*':
           return multiply(a,b);
            break;
        case '/':
           return divide(a,b);
            break;
        default:
          return  'ERROR'
            break;
    }
};


const updateDisplay = number => {
    const screenNumber = currentOpText.innerHTML;
    currentOpText.innerHTML = (screenNumber.toString()) + (number.toString());
    
};

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        currentNum = button.textContent;
       updateDisplay(button.innerHTML);
      
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click',  () => {
        currentOp = button.textContent
        if(currentOp.length <= 1){
            updateDisplay(button.textContent)
        }
    })
})


equalsButton.addEventListener('click', () =>{
    equals();
})
percentButton.addEventListener('click', () =>{
    calculatePercent();
})

//Calculus
const add = (num1,num2) =>{
    return num1 + num2;
};
const subtract = (num1,num2) =>{
    return num1 - num2;
};
const multiply = (a,b) =>{
    return a * b;
};
const divide = (a,b) =>{
    return a/b;
};


*/