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