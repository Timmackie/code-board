// Login form handler function
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Gets email and password values from the form
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  
  // Sends POST request if email and password fields are accepted 
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

// Attach an event listener to the login form submit button
const submit = document
  .querySelector('#login-form') 
submit
  .addEventListener('click', (e) => loginFormHandler(e));

