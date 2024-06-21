
const scriptURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdYr0_QaM7vCIGAaHSSsg27NUXcPR-vC_eBwKMw1B7UYgDCFA/formResponse'

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
 
})

// let submitted = false;

// function displaySuccessMessage() {
//     if (submitted) {
//         Swal.fire({
//             icon: 'success',
//             title: 'Message Sent',
//             text: 'Thank you for reaching out. I will get back to you soon!'
//         });
//         submitted = false;  // Reset the submitted flag
//     }
// }

// // Ensure the `submitted` flag is reset when the page loads
// document.addEventListener('DOMContentLoaded', (event) => {
//     submitted = false;
// });
