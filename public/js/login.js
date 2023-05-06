//-- Adding a function loginFormHandler that is called when the user submits a login form--//
//-- The function first prevents the default form submission behavior with event.preventDefault()--//
//-- If both fields have values, the function sends a POST request to /api/user/login with the username and password in the request body, encoded as JSON--//
//--  the code sets up an event listener on the login form element that calls the loginFormHandler function when the form is submitted--//


const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Failed to log in.'); 
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
