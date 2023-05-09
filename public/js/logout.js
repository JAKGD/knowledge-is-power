//-- Adding function logout that sends a POST request to /api/user/logout with the headers Content-Type set to application/json--//

var logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); 
  } else {
    alert('Failed to log out.'); 
  }
};


//-- the code sets up an event listener on the element with id logout that calls the logout function when clicked--//
document
  .querySelector('#logout')
  .addEventListener('click', logout);
