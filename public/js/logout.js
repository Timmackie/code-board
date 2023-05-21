const logout = async () => {
<<<<<<< HEAD
  const response = await fetch('/api/users/logout', {
=======
  const response = await fetch('/api/user/logout', {
>>>>>>> develop
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
<<<<<<< HEAD
    document.location.replace('/login');
=======
    document.location.replace('/');
>>>>>>> develop
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
