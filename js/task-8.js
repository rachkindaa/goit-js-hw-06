const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert("Будь ласка, заповніть всі поля форми.");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.dir(formData);
    event.currentTarget.reset();
  }
}
