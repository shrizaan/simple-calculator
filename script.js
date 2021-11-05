let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";


// Mengambil elemen input yang nama classnya ".calculator-screen" di HTML
const calculatorScreen = document.querySelector('.calculator-screen');

// Mengambil elemen button yang nama classnya ".number" di HTML
const numbers = document.querySelectorAll(".number");

// Mengambil elemen button yang nama classnya ".operator" di HTML
const operators = document.querySelectorAll(".operator");

// Mengambil elemen button yang nama classnya ".equal-sign" di HTML
const equalSign = document.querySelector(".equal-sign");

// Mengambil elemen button yang nama classnya ".all-clear" di HTML
const clearButton = document.querySelector(".all-clear");

// Mengambil elemen button yang nama classnya ".decimal" di HTML
const decimal = document.querySelector(".decimal");


//----------------------------------------------------------------------------------------------------

// Function untuk mengganti angka di layar
const updateScreen = (number) => {
    calculatorScreen.value = number;
};

// Function untuk menyimpan angka yang diklik ke variabel "currentNumber" dan menampilkannya dilayar
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

/*
Function untuk memberikan currentNumber ke prevNumber
dan menyimpan nilai operator yang diklik ke variabel calculationOperator
*/
const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
};

// Function untuk kalkulasi
const calculation = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
};

// Function untuk menghapus semua angka yang dimasukkan dan mengambilkan angka dilayar dengan 0
const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};

// Function untuk memberikan . ke currentNumber dan menampilkan dilayar
const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return ;
    }
    currentNumber += dot;
}


//----------------------------------------------------------------------------------------------------


// Menampilkan angka yang diklik ke layar
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});


// Menampilkan operator yang diklik ke layar
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

// Menambahkan event listener ke elemen equal sign
equalSign.addEventListener("click", () => {
    calculation();
    updateScreen(currentNumber);
})

// Menambahkan event listener ke elemen all clear
clearButton.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})

// Menambahkan even listener ke elemen decimal
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})