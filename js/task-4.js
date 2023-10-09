const minusbtn = document.querySelector('[data-action="decrement"]');
const plusbtn = document.querySelector('[data-action="increment"]');
const elemValue = document.querySelector("#value");

let startvalue = 0;

function updtStartvalue() {
  elemValue.textContent = startvalue;
}

minusbtn.addEventListener("click", function () {
  startvalue -= 1;
  updtStartvalue();
});

plusbtn.addEventListener("click", function () {
  startvalue += 1;
  updtStartvalue();
});
