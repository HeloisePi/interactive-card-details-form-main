let cardNumber = document.querySelector('.cardNumber');
let inputNumber = document.querySelector('.inputNumber');

let cardName = document.querySelector('.cardName')
let inputName = document.querySelector('#inputName');

let cardMonth = document.querySelector('.cardMonth');
let inputMonth = document.querySelector('.inputMonth');
 
let cardYear = document.querySelector('.cardYear');
let inputYear = document.querySelector('.inputYear');

let cardCvc = document.querySelector('.cardCvc');
let inputCvc = document.querySelector('.inputCvc');

let form = document.querySelector('form');
let completeForm = document.querySelector('.completeForm');

let allInput = document.querySelectorAll('.input');

document.addEventListener('input', (e) =>{
    if( e.target == number){
        inputNumber.value = numberWithSpaces(inputNumber.value);
        cardNumber.textContent=inputNumber.value;
        verification(inputNumber.value, inputNumber.value.length, 19, inputNumber);
        
    }
    if ( e.target == inputName){
        cardName.textContent= inputName.value;
        numberTooLarge(inputName.value.length, 30, inputName)
    
        if (numberTooLarge(inputName.value.length, 30, inputName) == true ){
            inputName.classList.add('warning');
            message("Too large", inputName);
        }
        else {
            inputName.classList.remove('warning');
            message('',inputName)
        }
    } 
    if ( e.target == inputMonth){
        cardMonth.textContent = inputMonth.value;
        verification(inputMonth.value, inputMonth.value.length, 2, inputMonth);
    }
    if ( e.target == inputYear){
        cardYear.textContent = inputYear.value;
        verification(inputYear.value, inputYear.value.length, 2, inputYear);
    }
    if ( e.target == inputCvc){
        cardCvc.textContent = inputCvc.value;
        verification(inputCvc.value, inputCvc.value.length, 3, inputCvc);
    }
    
})

function numberWithSpaces(x) {
    x =  x.replace(/\s/g, '');
    return x.replace(/\d{4}(?=.)/g, '$& ');
}

function numberTooLarge(number, maxSize, input){
    let tooLarge = false ;
    if (number > maxSize){
        tooLarge = true ;
    }
    else {
        tooLarge = false ;
    }
    
    return tooLarge; 
}

function message(message, input){
    let div = input.parentNode;
    let p = div.querySelector('.warningP');
    p .textContent = message;
    
    
}

function isNumber(value ,input){
    let isnumber = true;
    let check = value.replace(/\s/g, '');
    if (isNaN(Number(check))){
        isnumber = false;
    }
    else{
        isnumber = true;
    }
    return isnumber; 

}
function verification(value, number, maxSize, input ){  
    if (numberTooLarge(number, maxSize, input) == true){
        input.classList.add('warning');
        message("Too large", input);
        return
    }
    if (isNumber(value ,input) == false){
        input.classList.add('warning');
        message('Wrong format, numbers only', input);
        return
    }
    input.classList.remove('warning');
    message('',input)
}

function isWarning(){
    let checkWarning = document.querySelectorAll('.warning');
    if(checkWarning.length != 0){
        return true;
    }
    return false;
}

function isBlank(input){
    if (input != undefined){
        console.log('ça passe ici')
        if (input.value.length == 0 ){
            console.log('ça passe par las')
            input.classList.add('warning');
            message("Can't be blank", input);
            return false
        }
        return true
    }
   else{
    return 
   }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log('allInput', allInput.length)
    for ( i = 0;  i < allInput.length; i++){
        console.log(allInput[i])
        isBlank(allInput[i])
    }
 
    if (isWarning() == false){
        form.classList.add ("none");
        completeForm.classList.remove ("none");
    }
    
});



