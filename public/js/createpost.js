const signupFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#content').value.trim();

    if( body ) {
        const response = await fetch ('api/post/create', {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            alert(`Created a new post!`)
            document.location.replace('/');
        } else {
            alert(`Please input text`);
        }
    }
}

const create = document
  .querySelector('#createPostSubmit') 
create
  .addEventListener('click', (e) => signupFormHandler(e));