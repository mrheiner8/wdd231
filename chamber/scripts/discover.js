import {attractions} from '../data/places.mjs'
console.log(attractions)

//-------- GRAB THE REFERENCE TO THE SECTION WHERE THE ITEMS WILL BE DISPLAYED --------//
const showHere = document.querySelector("#all-places")


//------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(attractions) {
    attractions.forEach(x => {
        //build the card element
        const thecard = document.createElement('div')
        //build the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_url}`
        thephoto.alt = x.alt
        thecard.appendChild(thephoto)
        // build the title element
        const thetitle = document.createElement('h2')
        thetitle.innerHTML = x.name
        thecard.appendChild(thetitle)
        // build the address elements
        const theaddress = document.createElement('address')
        theaddress.innerHTML = x.address
        thecard.appendChild(theaddress)
        // build the description element
        const thedesc = document.createElement('p')
        thedesc.innerHTML = x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)
    }); //end loop
} // end function

// START DISPLAYING ALL ITEMS IN THE JSON FILE
displayItems(attractions)