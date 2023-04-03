const layarKalkulator = document.querySelector(".layar-kalkulator");

const perbaruiLayar = (number) => {
  layarKalkulator.value = number;
};
const numbers = document.querySelectorAll(".angka");
// console.log(numbers);

numbers.forEach((number) => {
  //   console.log(number);
  number.addEventListener("click", (event) => {
    // console.log(event.target.value);
    perbaruiLayar(event.target.value);
    // perbaruiLayar(currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  //   console.log(number);
  number.addEventListener("click", (event) => {
    // console.log(event.target.value);
    inputNumber(event.target.value);
    perbaruiLayar(currentNumber);
  });
});

const operator = document.querySelectorAll(".operator");

operator.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
    // return;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const samaDengan = document.querySelector(".sama-dengan");

samaDengan.addEventListener("click", () => {
  calculate();
  perbaruiLayar(currentNumber);
});

const calculate = () => {
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
      return;
  }

  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".hapus-semua");
clearBtn.addEventListener("click", () => {
  clearAll();
  perbaruiLayar(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const desimal = document.querySelector(".desimal");

desimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  perbaruiLayar(currentNumber);
});

inputDecimal = (dot) => {
  currentNumber += dot;
};

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
