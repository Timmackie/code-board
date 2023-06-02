// Handler function for the signup form submission
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Grabs for input values from modal
    const name = document.querySelector('#name4').value.trim();
    const email = document.querySelector('#email4').value.trim();
    const github = document.querySelector('#github').value.trim();
    const linkedin = document.querySelector('#linkedIn').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Ensures all fields are filled then sends POST request to create a new user
    if(name && password && email && github && linkedin ) {
        const response = await fetch ('api/user/register', {
           method: 'POST',
           body: JSON.stringify({ name, password, email, linkedin, github }),
           headers: { 'Content-Type': 'application/json' },
        });

        // Response to the new account request
        if(response.ok){
            alert(`Created a new account!`)
            document.location.replace('/');
        } else {
            alert(`missing information`)
        }
    }
}

// Attach an event listener to the submit button of the create account form
const create = document
  .querySelector('#createAccountSubmit') 
create
  .addEventListener('click', (e) => signupFormHandler(e));