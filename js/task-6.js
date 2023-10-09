const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value.trim().length;
  const inputLength = parseInt(input.getAttribute("data-length", 10));

  if (inputValue === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
