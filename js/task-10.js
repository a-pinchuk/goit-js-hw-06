function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
};

ref.createBtn.addEventListener('click', createBoxes(4));
ref.destroyBtn.addEventListener('click', deleteBoxes);
ref.input.addEventListener('click', () => {
  console.log(parseInt(ref.input.value));
});

function createBoxes(amount) {
  console.log(amount);
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    newArray.push(document.createElement('div'));
  }
  ref.boxes.append(...newArray);
}

function deleteBoxes() {
  ref.boxes.remove();
}

console.log(ref.boxes);
