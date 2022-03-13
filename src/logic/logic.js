
let operator = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
function calculate(value,buttonName, type){


    if(type === "number"){

        if(buttonName >=0 || buttonName < 10 ){
            secondNumber= secondNumber*10 + buttonName;
            return secondNumber;
        }
    }
    
    else if(buttonName === "+" || buttonName ==="-" || buttonName==="*" || buttonName ==="/" || buttonName==='='){
        
        
        if(buttonName !== "="){
            switch(operator){
                case "+":
                    firstNumber += value;
                    break;
                case "-":
                    firstNumber -= value;
                    break;
                case "*":
                    firstNumber *= value;
                    break;
                case "/":
                    firstNumber /= value;
                    break;
                default: break;
            }
            operator = buttonName;
            secondNumber= 0;
       }
       console.log(operator);
        
        if(buttonName ==="="){
            switch(operator){
                case "+":
                    firstNumber= firstNumber + secondNumber;
                    secondNumber=0;
                    break;
                    case "-":
                        firstNumber= firstNumber - secondNumber;
                        secondNumber=0;
                        break;
                        case "*":
                            firstNumber= firstNumber * secondNumber;
                            secondNumber=0;
                            break;
                            case "/":
                                firstNumber= firstNumber / secondNumber;
                                secondNumber=0;
                    break;
                default: break;
            }
           result = firstNumber ;
           //firstNumber=0;
           secondNumber=0;
           return result;
        }
    }
    
    return secondNumber;

}

export default calculate;