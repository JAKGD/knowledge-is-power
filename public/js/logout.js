//-- Adding function logout that sends a POST request to /api/user/logout with the headers Content-Type set to application/json--//

<<<<<<< HEAD
var logout = async () => {
=======
const logout = async () => {
  console.log("logout")
>>>>>>> 0a6374e235fe3a292addae70426b4951ac94c17e
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
