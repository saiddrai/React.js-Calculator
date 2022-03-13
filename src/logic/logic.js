
let operator = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let next = false;
function calculate(value,buttonName, type){


    if(type === "number"){

        if(buttonName >=0 || buttonName < 10 ){
            if(next){
                firstNumber = 0;
                next = false;
            }
            secondNumber= secondNumber*10 + buttonName;
            return secondNumber;
        }
    }
    
    else if(buttonName === "+" || buttonName ==="-" || buttonName==="*" || buttonName ==="/" || buttonName==='='){
    
        if(buttonName !== "="){
            operator = buttonName;
        }

        switch(operator){
                case "+":
                    firstNumber += secondNumber;
                    secondNumber = 0;
                    break;
                case "-":
                    firstNumber -= secondNumber;
                    secondNumber = 0;
                    break;
                case "*":
                    firstNumber *= secondNumber;
                    secondNumber = 0;
                    break;
                case "/":
                    firstNumber /= secondNumber;
                    secondNumber = 0;
                    break;
                default: break;
            }

            if(buttonName ==="="){
                result = firstNumber;
                next = true;
                return result;
            }
            next = false;
             return secondNumber;

    }
    
}

export default calculate;