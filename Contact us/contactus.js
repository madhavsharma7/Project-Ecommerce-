const scriptURL = 'https://script.google.com/macros/s/AKfycbza0BbAP4MB4b3Rla0NWzErZH2ixzU9Quf_3EZXNDAHa4P8xR41kGuvXQ-rJcXSICDgVQ/exec';
const form = document.forms['submit-to-google-sheet'];
// const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { 
    method: 'POST',  
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      alert("Thank you for contacting us");
    //   setTimeout(() => msg.innerHTML = "", 5000);
      form.reset(); // Optionally reset the form after submission
    } else {
      warning("There was an issue with submitting your message. Please try again.");
    }
  })
  .catch(error => {
    console.error('Error!', error.message);
    console.log("There was an error submitting your message. Please try again.");
  });
});
