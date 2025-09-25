var array = [];
var array2 = [];
var error = "";

function inputValue() {
    var input = document.getElementById('inputValue');
    if (input.value === "") {
        input.value = 0;
    }
    array.push(input.value);
    document.getElementById('outputArray').innerHTML = array;
    input.value = "";
}

function sum() {
    var sumValue = 0;
    if (array.length === 0) {
        error = "mãng rổng";
        outputValue(error);
        return;
    }

    for (let i = 0; i < array.length; i++) {
        sumValue += parseInt(array[i]);
    }
    outputValue(sumValue);
    return;
}

function outputValue(result) {
    document.getElementById('outputValue').innerHTML = result;
    return;
}

function countNumberPositive() {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) > 0) {
            count++;
        }
    }
    outputValue(count);
    return;
}

function findNumberSmallest() {
    var smallNumber = parseInt(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) < smallNumber) {
            smallNumber = parseInt(array[i]);
        }
    }
    outputValue(smallNumber);
    return;
}

function findNumberSmallestAndPositive() {
    var Number = parseInt(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) < Number && parseInt(array[i]) > 0) {
            Number = parseInt(array[i]);
        }
    }
    outputValue(Number);
    return;
}

function findEvenLastNumber() {
    var Number = -1;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) % 2 == 0) {
            Number = parseInt(array[i]);
        }
    }
    outputValue(Number);
    return;

}

function swap() {
    var a = document.getElementById('value1').value - 1;
    var b = document.getElementById('value2').value - 1;

    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;

    outputValue(array);
    document.getElementById('outputArray').innerHTML = array;
    return;
}

function sort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    }

    outputValue(array);
    document.getElementById('outputArray').innerHTML = array;
    return;
}

function findPrime() {
    var number = -1;
    for (let i = 0; i < array.length; i++) {
        if (isPrime(parseInt(array[i]))) {
            number = parseInt(array[i]);
            outputValue(number);
            return;
        }

    }
    outputValue(number);
    return;
}

function isPrime(number) {
    var count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            count++;
        }

    }
    if (count !== 0 || number <= 2) {
        return false;
    }
    return true;
}

function inputValueOfFloat() {
    var input = document.getElementById('inputValueOfFloat');
    array2.push(input.value);
    document.getElementById('outputArrayOfFloat').innerHTML = array2;
    input.value = "";
}

function findInteger() {
    var count = 0;
    for (let i = 0; i < array2.length; i++) {
        if (Number.isInteger(parseFloat(array2[i]))) {
            count++;
        }

    }
    outputValue(count);
    return;
}

function compare() {
    var countPositiveNumber = 0;
    var countNegativeNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) >= 0) {
            countPositiveNumber++;
        } else {
            countNegativeNumber++;
        }
    }
    if (countPositiveNumber > countNegativeNumber) {
        outputValue("Số dương lớn hơn số âm");
        return;
    } else {
        outputValue("Số âm lớn hơn số dương");
        return;
    }
    outputValue("2 số ngang nhau");
    return;
}

