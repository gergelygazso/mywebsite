
//100vh doesnt work for mobile when address bar is active--> this is a hotfix for this issue
const intro = document.querySelector('.intro');
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
intro.style.setProperty('--vh', `${vh}px`);
//***********************************************************/