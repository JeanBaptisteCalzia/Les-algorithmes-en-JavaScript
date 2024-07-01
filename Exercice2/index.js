// Créez votre fonction ici
function calculate(a, b, operator) {
  // Addition
  if (operator == "+") {
    let result = a + b;
    return result;
  }
  // Soustraction
  if (operator == "-") {
    let result = a - b;
    return result;
  }
  // Multiplication
  if (operator == "*") {
    let result = a * b;
    return result;
  }
  // Division
  if (operator == "/") {
    let result = a / b;

    if (a === 0 || b === 0) {
      console.log("Division by zero is not allowed");
      return false;
    } else {
      return result;
    }
  }
  // Modulo
  if (operator == "%") {
    console.log("Invalid operator");
    return false;
  }
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
