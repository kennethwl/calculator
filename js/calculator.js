const add = (a,b) =>{
    return a + b;
};
const subtract = (a,b) =>{
    return a - b;
};
const multiply = (a,b) =>{
    return a * b;
};
const divide = (a,b) =>{
    return a/b;
};

const operator = (a, b, oper) => {
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
