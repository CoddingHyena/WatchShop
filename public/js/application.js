const RegForm = document.querySelector('#reg-form');
const LoginForm = document.querySelector('#log-form');
const AddForm = document.querySelector('#addForm');
const UpdateForm = document.querySelector('#updateForm');
const feedbackButton = document.querySelector('#feedbackButton');
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modalCloseButton');
const feedbackForm = document.querySelector('#feedbackForm');

feedbackForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(feedbackForm);
  const res = Object.fromEntries(data);
  try {
    const response = await fetch('/user/newRequest', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    console.log(result);
    feedbackForm.reset();
  } catch (error) {
    console.log(error, 'Ошибка в Application');
  }
  modal.close();
});

modalCloseButton?.addEventListener('click', async (e) => {
  e.preventDefault();
  modal.close();
});

feedbackButton.addEventListener('click', async (e) => {
  e.preventDefault();
  modal.showModal();
});

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
    if (result.msg) {
      window.location.href = '/admin/adminpage';
    }
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
    if (result.msg) {
      window.location.href = '/admin/adminpage';
    }
  } catch (error) {
    console.log(error, 'Ошибка в Application');
  }
});

// AddForm?.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const data = new FormData(AddForm);
//   const res = Object.fromEntries(data);
//   console.log(res, 'Я рес');
//   try {
//     const response = await fetch('/admin/addwatch', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(res),
//     });
//     const result = await response.json();
//   } catch (error) {
//     console.log(error, 'Ошибка в Application');
//   }
// });

UpdateForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(UpdateForm);
  const res = Object.fromEntries(data);
  console.log(res);
  try {
    const response = await fetch('/admin/page', {
      method: 'PUT',
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
