let string = "";

function appendToDisplay(value) {
  string += value;
  document.querySelector("input").value = string;
}

function clearDisplay() {
  string = "";
  document.querySelector("input").value = string;
}

function calculateResult() {
  string = eval(string);
  document.querySelector("input").value = string;
}
