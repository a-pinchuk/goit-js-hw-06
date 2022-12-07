const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createLI = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  return itemEl;
});

const getIngrELem = document.querySelector('#ingredients');

getIngrELem.append(...createLI);
