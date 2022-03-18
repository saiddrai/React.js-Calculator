
let operator = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let next = false;
let negative = false;
function calculate(value,buttonName, type){
    if(buttonName === "AC"){
        return 0;
    }
    if(buttonName === "+/-"){
        return value*(-1)
    }


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
        if(buttonName ==="-"){
            negative= true;
        }

        switch(operator){
                case "+":
                    if(negative){
                        secondNumber*=(-1);
                        negative= false;
                    }
                    firstNumber += secondNumber;
                    secondNumber = 0;
                    break;
                case "-":
                    if(negative){
                        secondNumber*=(-1);
                        negative= false;
                    }
                    firstNumber =   secondNumber+firstNumber; console.log("first number : "+ firstNumber + "secondNumber" +secondNumber)
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