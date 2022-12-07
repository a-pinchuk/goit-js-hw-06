function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  body: document.querySelector('body'),
};

ref.button.addEventListener('click', () => {
  ref.span.textContent = getRandomHexColor();
  ref.body.style.backgroundColor = ref.span.textContent;
});
