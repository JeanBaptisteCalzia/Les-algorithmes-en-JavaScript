const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let displayResult = document.querySelector("#binaryResult");
  displayResult.innerHTML = "";
  convertToBinary();
});

function convertToBinary() {
  let input = document.querySelector("#decimalInput");
  let displayResult = document.querySelector("#binaryResult");
  let userInput = input.value;
  let binary = (userInput % 2).toString();

  for (let i = 0; userInput > 1; i++) {
    userInput = parseInt(userInput / 2);
    binary = (userInput % 2) + binary;
  }
  displayResult.append(binary);
}
