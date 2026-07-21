import { temples } from '../data/temples.js';
//console.log(temples)

import { url } from '../data/temples.js';
//console.log(url)

//------ GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector('#showHere');
// GET A REFERENCE TO THE HTML DIALOG ELEMENT
const myDialog = document.querySelector('#myDialog');
const myTitle = document.querySelector('#myDialog h2');
const myInfo = document.querySelector('#myDialog p');
const myClose = document.querySelector('#myDialog button');
// 'Close' button closes the dialog modally
myClose.addEventListener('click', () => myDialog.close());

//------ LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        //Add an event listener to each division on the page
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    });
} // end function

displayItems(temples)

// POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff(x) {
    myTitle.innerHTML = x.name;
    myInfo.innerHTML = `<p>Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.</p>`;
    myDialog.showModal();
}// end function

/*
const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');
const closeButton = document.querySelector('#closeButton');

// 'Show the dialog' button opens the dialog modally
openButton1.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'An Apple has 95 calories.'
    dialogBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'An orange has 45 calories.'
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'An Orange has 105 calories.'
    dialogBox.showModal();
});


'number', 'name', 'dedicated', 'person', 'path'
*/