
let screen=document.getElementById('calculator-screen');
let screenValue=screen.textContent;

let firstValue=0;
let previousOperator=null;
let waitForSecondValue=false;


function inputDigit(num){

    if(waitForSecondValue){
        waitForSecondValue=false;
        screenValue=num;
    }
    else{
        screenValue = screenValue ==='0'? num : screenValue + num;
    }
    
    updateScreenDisplay();
}

function inputDecimal(){
    
    if(waitForSecondValue){
        inputDecimal('0.')
    }
    if(screenValue.includes('.')){
        return;
    }

    if(!screenValue.includes('.')){
        screenValue=screenValue+'.'
    }
    updateScreenDisplay();
}

function toggleSign(){
    screenValue=screenValue*-1;
    if(waitForSecondValue){
        firstValue=screenValue;
    }
    updateScreenDisplay();
}

function clearEntry(){
    screenValue=screenValue.slice(0,-1);
    if(screenValue.length===0){
        screenValue='0';
    }
    updateScreenDisplay();
}

function allClear(){
    firstValue=0;
    screenValue='0';
    updateScreenDisplay();
}

function handleOperator(currentOperator){
    
    if(waitForSecondValue){
        previousOperator=currentOperator;
        return;
    }


    firstValue=calculate(firstValue,previousOperator,parseFloat(screenValue));
    screenValue=firstValue;
    previousOperator=currentOperator;
    waitForSecondValue=true;
    updateScreenDisplay();

}

function calculate(first,operator,second){
    if(operator==='+')return first + second;
    if(operator==='-')return first - second;
    if(operator==='*')return first * second;
    if(operator==='/')return first / second;
    
    return second;
}

function getSquareRoot(){
    screenValue=Math.sqrt(parseFloat(screenValue));
    firstValue=screenValue;
    updateScreenDisplay();
}


function updateScreenDisplay(){
    
    screen.textContent=screenValue;  

}