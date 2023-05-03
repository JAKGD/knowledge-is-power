//-- const newpostFormHandler = async (event) => {: This line defines the newpostFormHandler function as an asynchronous arrow function that takes an event parameter--//
//-- event.preventDefault();: This line prevents the default behavior of the submit event, which is to reload the page when a form is submitted--//
const newpostFormHandler = async (event) => {
  event.preventDefault();

//-- This line selects the HTML input element with the id of title-newpost, gets its value using the value property, and removes any leading or trailing whitespace using the trim() method--//
//-- Adding the HTML textarea element with the id of content-newpost--//
//-- if (title && content) {: This line checks if both the title and content variables are truthy, meaning they are not empty strings or null--//


  const title = document.querySelector('#title-newpost').value.trim();
  const content = document.querySelector('#content-newpost').value.trim();
//-- method: 'POST',: This line specifies that the HTTP method for the request should be POST--//
//-- headers: { 'Content-Type': 'application/json' },: This line sets the Content-Type header to application/json, indicating that the request body is in JSON format--//

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
//-- This line redirects the user to the /dashboard page using the replace() method, which replaces the current page in the browser history--//
    if (response.ok) {
      document.location.replace('/dashboard'); 
    } else {
      alert('Failed to create a new post.'); 
    }
  }
};



document
  .querySelector('.newpost-form')
  .addEventListener('submit', newpostFormHandler);
