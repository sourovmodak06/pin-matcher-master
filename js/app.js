function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', () => {
    const pin = getPin();
    const showPin = document.getElementById('display-pin');
    showPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', (event) => {
    const number = event.target.innerText;
    const typedNumberFiled = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberFiled.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberFiled.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberFiled.value = remainingDigits;
        }
    } else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberFiled.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', () => {
    const showPin = document.getElementById('display-pin');
    const currentPin = showPin.value;

    const typedNumberFiled = document.getElementById('typed-number');
    const typedNumber = typedNumberFiled.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinErrorMessage = document.getElementById('pin-error');

    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinErrorMessage.style.display = 'none';
    } else {
        pinErrorMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});









