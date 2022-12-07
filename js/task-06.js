const ref = {
  input: document.querySelector('#validation-input'),
};

ref.input.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== parseInt(ref.input.getAttribute('data-length'))) {
    ref.input.classList.add('invalid');
  } else {
    ref.input.classList.remove('invalid');
    ref.input.classList.add('valid');
  }
});
