//discover.js
import { attractions } from '../data/places.mjs'
console.log(attractions)

//-------- GRAB THE REFERENCE TO THE SECTION WHERE THE ITEMS WILL BE DISPLAYED --------//
const showHere = document.querySelector("#all-places")


//------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(attractions) {
    attractions.forEach(x => {
        // 1. Outer Card Container
        const thecard = document.createElement('div');
        thecard.classList.add('card');

        //build the card/figure element
        const imageFigure = document.createElement('figure');
        thecard.appendChild(imageFigure)
        
        //build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.alt;
        thephoto.setAttribute('loading', 'lazy');
        thephoto.setAttribute('width', '300');
        thephoto.setAttribute('height', '200');
        imageFigure.appendChild(thephoto);
        
        // build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerHTML = x.name;
        thecard.appendChild(thetitle);
        
        // build the address elements
        const theaddress = document.createElement('address');
        theaddress.innerHTML = x.address;
        thecard.appendChild(theaddress);
        
        // build the description element
        const thedesc = document.createElement('p');
        thedesc.innerHTML = x.description;
        thecard.appendChild(thedesc);

        // build the learn more btn
        const cardBtn = document.createElement('button');
        cardBtn.textContent = 'Learn More';
        thecard.appendChild(cardBtn);

        showHere.appendChild(thecard);
    }); //end loop
} // end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(attractions)
//End discover.js