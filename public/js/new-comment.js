//-- const post_id =: This line defines a new constant variable named post_id--//
//-- current URL from the window.location object, converts it to a string using toString(), and splits it into an array--//

const post_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1];

//-- Adding a HTML textarea element with the id of content-newcomment, gets its value using the value property--//

const newcommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#content-newcomment').value.trim();
//-- if (content) {: This line checks if the content variable is truthy--//

  if (content) {
    //-- This line sends an asynchronous POST request to the /api/comment endpoint on the server using the fetch() method--//
    //-- which returns a Promise that resolves with the server's response--//

    const response = await fetch(`/api/comment`, {
      method: 'POST',
      //-- This line sets the request body to a JSON stringified object that contains the content variable retrieved from the form--//

      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
//-- checks if the server's response has an HTTP status code in the ok--//
    if (response.ok) {
      document.location.reload(); 
    } else {
      alert('Failed to create a comment.');
    }
  }
};


//--This line selects the HTML form element with the class newcomment-form which creates a new comment--//

document
  .querySelector('.newcomment-form')
  .addEventListener('submit', newcommentFormHandler);
