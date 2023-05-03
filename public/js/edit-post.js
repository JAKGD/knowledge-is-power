//-- The code retrieves the post_id from the current URL by splitting the URL at each / character and taking the last item in the resulting array--//
//-- The code defines an asynchronous function updatepostFormHandler that is called when the user submits a form to update a post--//
//-- The function first prevents the default form submission behavior with event.preventDefault().--//



const post_id = window.location.toString().split('/')[
 window.location.toString().split('/').length - 1];


const updatepostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-updatepost').value.trim();
  const content = document.querySelector('#content-updatepost').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
//-- the function redirects the user to the dashboard page (/dashboard) using document.location.replace--//
    if (response.ok) {
      document.location.replace('/dashboard'); 
    } else {
      alert('Failed to update a post.'); 
    }
  }
};


//-- defines an asynchronous function deletepostFormHandler that is called when the user submits a form to delete a post--//
//-- The function first prevents the default form submission behavior with event.preventDefault().--//
const deletepostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard'); 
  } else {
    alert('Failed to delete a post.'); 
  }
};


//-- the code sets up event listeners on the update post form and delete post form elements that call the updatepostFormHandler and deletepostFormHandler functions respectively when the forms are submitted--//
document
  .querySelector('.updatepost-form')
  .addEventListener('submit', updatepostFormHandler);

document
  .querySelector('.deletepost-form')
  .addEventListener('submit', deletepostFormHandler);
