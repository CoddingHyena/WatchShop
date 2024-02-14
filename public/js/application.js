const RegForm = document.querySelector('#reg-form');
const LoginForm = document.querySelector('#log-form');
const AddForm = document.querySelector('#addForm');

RegForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(RegForm);
  const res = Object.fromEntries(data);
  console.log(res);
  try {
    const response = await fetch('/admin/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error, 'Ошибка в Application');
  }
});

LoginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(LoginForm);
  const res = Object.fromEntries(data);
  console.log(res, 'Я рес');
  try {
    const response = await fetch('/admin/log', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error, 'Ошибка в Application');
  }
});

AddForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(AddForm);
  const res = Object.fromEntries(data);
  console.log(res, 'Я рес');
});
