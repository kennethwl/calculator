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
let operation = '';
let haveDot = false;

//Event listeners

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

operatorButtons.forEach( operator => {
    operator.addEventListener('click', (e) =>{
        if(!num2){                                          //Checks if the is a number to preform operation on
            return;
        }
        haveDot = false;                                    //Sets haveDot back to false, so num1 1 can contain a dot.
        const operationName = e.target.innerText;
        if(num1 && num2 && operation){                      //Check if there are two numbers and operator to preform calculate
            calculate();
        }else{
            result = parseFloat(num2);                      // num2 is a string, convert to number
        }
        clearScreen2(operationName)
        operation = operationName;
    })
})


equalsButton.addEventListener('click', (e) => {        //Check if both num present
    if(!num1 || !num2){
        return;
    }
    haveDot = false;                                   
    calculate();                                        //excetue calculation
    clearScreen2()                                      // move to upper screen
    secondDisplay.innerText = result;                   // displey the result
    num2 = '';                                          // reset variables
    num1 = '';

})

allClearButton.addEventListener('click', () => {
    allClear();
})
deleteButton.addEventListener('click', () => {
    del();
})

//Functions

const allClear = () =>{
    firstDisplay.innerText = '0';
   secondDisplay.innerText = '0';
    num1 = '';
    num2 = '';
    lastOperation = '';
    result = '';   
};


const del = () =>{
    let current =secondDisplay.innerText;
    secondDisplay.innerText = current.slice(0, -1)

    num2 = secondDisplay.innerText ;
};

const clearScreen2 = (name = '') =>{                     // Passes the number and operator to top screen
    num1 += num2 + ' ' + name + ' ';
    firstDisplay.innerText = num1;              
    secondDisplay.innerText = '';                        //Clear the second display
    num2 = '';                                           //Clear the num2 variable


}

const calculate = () =>{                                //Check operator and calculate
    if(operation === '+'){
        result = parseFloat(result) + parseFloat(num2);
    }else if(operation === '-'){
        result = parseFloat(result) - parseFloat(num2);
    }else if(operation === '*'){
        result = parseFloat(result) * parseFloat(num2);
    }else if(operation === '÷'){
        if(num2 === '0'){
            result ='Cannot divide by 0 mate.';
        }else{
        result = parseFloat(result) / parseFloat(num2);
        }
    }else if(operation === '%'){
        result = parseFloat(result) % parseFloat(num2);
    };
    console.log(result)
}
  

