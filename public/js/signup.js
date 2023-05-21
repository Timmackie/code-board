const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name4').value.trim();
    const email = document.querySelector('#email4').value.trim();
    const github = document.querySelector('#github').value.trim();
    const linkedin = document.querySelector('#linkedIn').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(name && password && email && github && linkedin ) {
        const response = await fetch ('api/user/register', {
           method: 'POST',
           body: JSON.stringify({ name, password, email, linkedin, github }),
           headers: { 'Content-Type': 'application/json' },
        });
        console.log(name, password, email, github, linkedin);

        if(response.ok){
            alert(`Created a new account!`)
            document.location.replace('/');
        } else {
            alert(`missing information`)
        }
    }
}

const create = document
  .querySelector('#createAccountSubmit') 
create
  .addEventListener('click', (e) => signupFormHandler(e));