//--- join.js
// set up Const
const formLoadedTime = new Date();
const timeStamp = document.querySelector("#timeStamp");
const openNp = document.querySelector("#open-np");
const modalNp = document.querySelector("#modal-np");
const closeNp = document.querySelector("#close-np");
const openBronze = document.querySelector("#open-bronze");
const modalBronze = document.querySelector("#modal-bronze");
const closeBronze = document.querySelector("#close-bronze");
const openSilver = document.querySelector("#open-silver");
const modalSilver = document.querySelector("#modal-silver");
const closeSilver = document.querySelector("#close-silver");
const openGold = document.querySelector("#open-gold");
const modalGold = document.querySelector("#modal-gold");
const closeGold = document.querySelector("#close-gold");

// Automatically set the hidden form timestamp field
timeStamp.value = formLoadedTime.toLocaleString();

// Add an event listener to open the modal
openNp.addEventListener("click", () => {
    modalNp.showModal();
});

openBronze.addEventListener("click", () => {
    modalBronze.showModal();
});

openSilver.addEventListener("click", () => {
    modalSilver.showModal();
});

openGold.addEventListener("click", () => {
    modalGold.showModal();
});

// Add an event listener to close the modal
closeNp.addEventListener("click", () => {
    modalNp.close();
});

closeBronze.addEventListener("click", () => {
    modalBronze.close();
});

closeSilver.addEventListener("click", () => {
    modalSilver.close();
});

closeGold.addEventListener("click", () => {
    modalGold.close();
});
//--- End join.js