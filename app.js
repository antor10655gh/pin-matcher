function randomNumber(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return randomNumber();
    }

}

function generatePin(){
    const getPin = randomNumber();
    const displayPin = document.getElementById('display-pin').value = getPin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const nInput = document.getElementById('diplay-number');
    if(isNaN(number)){
        if(number == 'C'){
            nInput.value = '';
        }
    }
    else{
        const prvInput = nInput.value;
        const prsInput = prvInput + number;
        nInput.value = prsInput;
    }

})