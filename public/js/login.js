const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/user/login', {
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
  return (false)
};

const submit = document
  .querySelector('#login-form') 
submit
  .addEventListener('click', (e) => loginFormHandler(e));

