function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
};

ref.createBtn.addEventListener('click', () => {
  let boxesAdd = createBoxes(ref.input.value);
  ref.boxes.append(...boxesAdd);
});

ref.destroyBtn.addEventListener('click', deleteBoxes);

function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    const newDivElem = document.createElement('div');
    newDivElem.style.height = `${30 + 10 * i}px`;
    newDivElem.style.weight = `${30 + 10 * i}px`;
    newDivElem.style.background = getRandomHexColor();
    newArray.push(newDivElem);
  }
  return newArray;
}

function deleteBoxes() {
  ref.boxes.innerHTML = '';
}

console.log(ref.boxes);
