//100vh for intro sectiondoesnt work for mobile when address bar is active--> this is a hotfix for this issue
const intro = document.querySelector('.intro');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
intro.style.setProperty('--vh', `${vh}px`);
//***********************************************************/

//prevent navigating to formspree thank you page by clicking on send button in form
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
      status.classList.add('success');
    status.innerHTML = "Thanks for your mail!";
    form.reset()
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
//********************************* */