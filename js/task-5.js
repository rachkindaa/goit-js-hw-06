const textIn = document.querySelector("#name-input");
const textOut = document.querySelector("#name-output");

textIn.addEventListener("input", function () {
  const inValue = textIn.value;

  if (inValue.trim() === "") {
    textOut.textContent = "Anonymous";
  } else {
    textOut.textContent = inValue;
  }
});
