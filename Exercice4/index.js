const btn = document.querySelector("#myButton");

btn.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.append("Bonjour, vous avez cliqué sur le bouton !");
  document.getElementById("myButton").after(newElement);
});
