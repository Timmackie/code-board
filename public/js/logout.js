// Function to send POST request to log out of the homepage
const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // Sucessful request sends user back to login page
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// Attach an event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
