export let unitBank = new Map();
unitBank.set('unit', {"0": "Zero", "1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine"});
unitBank.set('tens', {"10": "Ten", "11": "Eleven", "12": "Twelve", "13": "Thirteen", "14": "Fourteen", "15": "Fifteen", "16": "Sixteen", "17": "Seventeen", "18": "Eighteen", "19": "Ninteen"});
unitBank.set("ty-", {"2": "Twenty", "3": "Thirty", "4": "Forty", "5": "Fifty", "6": "Sixty", "7": "Seventy", "8": "Eighty", "9": "Ninety"});

export function toUnit(num) {
    let finalResult, firstResult;
    if (num.substr(0, 2) == "00" || num.length == 1) {
        firstResult = unitBank.get("unit")[`${num.substr(-1)}`];
        finalResult = `${firstResult}`;
    }
    return finalResult;
};

export function toHundredx(num = "013") {
    num = num.toString();
    let finalResult, firstResult, secondResult;

    if (num[0] == "0" && Number(num[1]) > 0) {
        if (num[1] == "1") {
            firstResult = unitBank.get('tens')[`${num.substr(1)}`];
            finalResult = `${firstResult}`;
        } else {
            if(Number(num[1] > 1)) {
                firstResult = unitBank.get('ty-')[`${num.substr(1, 1)}`];
                secondResult = unitBank.get('unit')[`${num.substr(-1)}`];
                finalResult = `${firstResult}-${secondResult}`;
            }
        }
    }  else {
        if(num.substr(0, 2) == "00") {
            finalResult = toUnit(num);
        }
    }
    return finalResult;
};

export function toHundred(num) {
    let finalResult, firstResult, secondResult;
    if(num[0] != "0") {
        firstResult = unitBank.get("unit")[`${num.substr(0, 1)}`];
        num = num.replace(num[0], "0");
        secondResult = toHundredx(num);
        finalResult = `${firstResult} Hundred and ${secondResult}`;
    } else {
        if (num[0] == "0") {
            firstResult = toHundredx(num);
            finalResult = `${firstResult}`;
        }
    }
    if (finalResult.includes(" and Zero")) finalResult = finalResult.replace(" and Zero", "");
    if (finalResult[finalResult.length - 4] == "Z") finalResult = finalResult.replace("-Zero", "");
    return finalResult;
};

export function toThousand(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 4) num = "00" + num
    else { if(num.length == 5) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(-3, 3);
    firstResult = toHundred(num1);
    secondResult = toHundred(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Thousand, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toMillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 7) num = "00" + num
    else { if(num.length == 8) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    firstResult = toHundred(num1);
    secondResult = toThousand(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Million, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toBillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 10) num = "00" + num
    else { if(num.length == 11) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    firstResult = toHundred(num1);
    secondResult = toMillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Billion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toTrillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 13) num = "00" + num
    else { if(num.length == 14) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    firstResult = toHundred(num1);
    secondResult = toBillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Trillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toQuadrillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 16) num = "00" + num
    else { if(num.length == 17) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toTrillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Quadrillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toQuintillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 19) num = "00" + num
    else { if(num.length == 20) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toQuadrillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Quintillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toSixtillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 22) num = "00" + num
    else { if(num.length == 23) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toQuintillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Sixtillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toSeptillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 25) num = "00" + num
    else { if(num.length == 26) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toSixtillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Septillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toOctillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 28) num = "00" + num
    else { if(num.length == 29) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toSeptillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Octillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toNonillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 31) num = "00" + num
    else { if(num.length == 32) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toOctillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Nonillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toDecillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 34) num = "00" + num
    else { if(num.length == 35) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toNonillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Decillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};

export function toUndecillion(num) {
    let finalResult, firstResult, secondResult;
    if (num.length == 37) num = "00" + num
    else { if(num.length == 38) { num = "0" + num; } };
    let num1 = num.substr(0, 3);
    let num2 = num.substr(3);
    console.log(num1, num2);
    firstResult = toHundred(num1);
    secondResult = toDecillion(num2);
    if (secondResult.includes("Zero")) secondResult = secondResult.replace("Zero", "");
    finalResult = `${firstResult} Undecillion, ${secondResult}`;
    if (finalResult[finalResult.length - 2] == ",") finalResult = finalResult.replace(",", "");
    if (num1 == "000") finalResult = `${secondResult}`;
    return finalResult;
};