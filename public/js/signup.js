// There doesn't appear to be an issue here, though there's more handlers in login.js?
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const response = await fetch('/signup', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    window.location.href = '/';
  } else {
    const errorMessage = await response.text();
    alert(`Error: ${errorMessage}`);
  }
});