function onClickCalculate() {
    let num1 = parseFloat(document.getElementById("firstOperand").value);
    let num2 = parseFloat(document.getElementById("secondOperand").value);
    let operation = document.getElementById("operation").value;
    let result;
    /*
  if (operation === "addition") {
    result = num1 + num2;
  } else if (operation === "subtraction") {
    result = num1 - num2;
  } else if (operation === "multiplication") {
    result = num1 * num2;
  } else if (operation === "division") {
    result = num1 / num2;
  } else {
    result = "Invalid operation";
  }
*/ switch(operation){
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            result = num1 / num2;
            break;
        default:
            result = "Invalid";
            break;
    }
    document.getElementById("result").innerHTML = `Result: ${result}`;
}
document.getElementById("calculateBtn").addEventListener("click", onClickCalculate);

//# sourceMappingURL=index.c36f364e.js.map
