const loginFormHandler = async (event) => {
  event.preventDefault();
<<<<<<< HEAD

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
=======
  console.log("hit form handler");

  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  
  console.log(email, password);
  if (email && password) {
    const response = await fetch('/api/user/login', {
>>>>>>> develop
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
<<<<<<< HEAD
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
=======
  return (false)
};

const submit = document
  .querySelector('#login-form') 
submit
  .addEventListener('click', (e) => loginFormHandler(e));

>>>>>>> develop
