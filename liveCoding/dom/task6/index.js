function setButton(buttonText) {
  const html = document.querySelector("body");
  html.appendChild((document.innerHTML = buttonText));
  const text = document.querySelector("body");
  text.appendChild((document.textContent = buttonText));
}

setButton("<button>button text </button>");
