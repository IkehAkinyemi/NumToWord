import { unitBank, toUnit, toHundredx, toHundred, toThousand, toMillion, toBillion, toTrillion, toQuadrillion, toQuintillion, toSixtillion, toSeptillion, toOctillion, toNonillion, toDecillion, toUndecillion} from './PlaceValue.js';
let display = document.querySelector('.display');
let number = document.querySelector('input'),
reset = document.querySelector(".button"),
numDigit = document.querySelector('.figure'),
digit = document.querySelector('.digit');

function numToWord() {
    let val = number.value.replace(/,/g, "");
    for (let x of val) {
        if(Number(x) == 0 && val.length > 1) val = val.replace("0", "")
        else { if ( Number(x) > 0) break; };
    };
    if (Number(val[0]) == 0 && val.length == 1) val = unitBank.get('unit')["0"]
    else if (val.length <= 2) {
        if (val.length == 1 && val[0] != 0) val = "00" + val;
        val = "0" + val;
        val = toHundredx(val);
    }
    else if (val.length == 3) val = toHundred(val)
    else if (val.length > 3 && val.length <= 6) val = toThousand(val)
    else if (val.length > 6 && val.length <= 9) val = toMillion(val)
    else if (val.length > 9 && val.length <= 12) val = toBillion(val)
    else if (val.length > 12 && val.length <= 15) val = toTrillion(val)
    else if (val.length > 15 && val.length <= 18) val = toQuadrillion(val)
    else if (val.length > 18 && val.length <= 21) val = toQuintillion(val)
    else if (val.length > 21 && val.length <= 24) val = toSixtillion(val)
    else if (val.length > 24 && val.length <= 27) val = toSeptillion(val)
    else if (val.length > 27 && val.length <= 30) val = toOctillion(val)
    else if (val.length > 30 && val.length <= 33) val = toNonillion(val)
    else if (val.length > 33 && val.length <= 36) val = toDecillion(val)
    else if (val.length > 36 && val.length <= 39) val = toUndecillion(val)
    else val = "Beyond my algorithm";
    display.textContent = val;
    numDigit.textContent = number.value.length;
};
number.addEventListener('input', numToWord);
number.addEventListener('input', function() {
    if (numDigit.textContent > 1) {
        digit.textContent = 'digits';
    } else {
        digit.textContent = 'digit';
    }
});
reset.addEventListener('click', function() {
    number.value = '';
    numDigit.textContent = "0";
})