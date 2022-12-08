const ref = {
  form: document.querySelector('.login-form'),
};

ref.form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('все поля должны быть заполнены');
  }
  console.log({ Login: email.value, Password: password.value });
  event.currentTarget.reset();
});
