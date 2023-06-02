// Function to handle the submission of the signup form
const signupFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#content').value.trim();

    // Ensures content field is not empty then sends POST request to make a new post
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

// Attach an event listener to the create post submit button
const create = document
  .querySelector('#createPostSubmit') 
create
  .addEventListener('click', (e) => signupFormHandler(e));