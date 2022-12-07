const ulList = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulList.length}`);

ulList.forEach(el => {
  const title = el.querySelector('h2');
  const item = el.querySelectorAll('li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${item.length}`);
});
