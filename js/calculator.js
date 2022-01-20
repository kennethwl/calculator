const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const percentButton = document.querySelector('.percent');
const equalsButton = document.querySelector('.equals');
const previousOpText = document.querySelector('.previous-op');
const currentOpText = document.querySelector('.current-op');



const del = () =>{
    let current =currentOpText.textContent
    currentOpText.textContent = current.slice(0, -1)
    
};
const calculatePercent = () =>{
    let number = parseInt(currentOpText.textContent) * 0.01;
    currentOpText.textContent = number;
}
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


allClearButton.addEventListener('click', () => {
    allClear();
})

let currentNum;
let currentOp;

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        currentNum = button.textContent;
       updateDisplay(button.innerHTML);
       console.log(currentNum)
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click',  () => {
        currentOp = button.textContent
        if(currentOp.length <= 1){
            updateDisplay(button.textContent)
        }
        
        console.log(currentOp)
    })
})
deleteButton.addEventListener('click', () => {
    del();
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

const allClear = () =>{
    currentOpText.innerHTML = '';
    previousOpText.innerHTML = '';
    
};