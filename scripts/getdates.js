// Get current date data for the footer
const today = new Date();
const currentYear = today.getFullYear();

// Set constants
const navButton = document.querySelector('#nav-button'); 

// nav button
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
});



// Inject the footer dates into the HTML spans
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;
