const ref = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', event => {
  ref.span.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
});
