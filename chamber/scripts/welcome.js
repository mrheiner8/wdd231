//---- welcome.js
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
// today's date
const currentTimestamp = Date.now();

// 1. Get the last recorded timestamp from localStorage
const lastLogin = localStorage.getItem('lastLoginDate')
const messageElement = document.querySelector('#welcome')

if (!lastLogin) {
    // First time logging in!
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate difference in milliseconds, then convert to whole days
    const timeDifference = currentTimestamp - Number(lastLogin);
    const daysDifference = Math.floor(timeDifference / msToDays);

    if (daysDifference < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        messageElement.textContent = "You last visited 1 day ago.";
    } else {
        messageElement.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// 2. Always update localStorage with the current timestamp for the next visit!
localStorage.setItem('lastLoginDate', currentTimestamp)
//---- End welcome.js
