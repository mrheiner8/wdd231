//wdd231/tool_box/directory.js
const url = 'data/tools.json';
//-------- GRAB THE REFERENCE TO THE SECTION WHERE THE ITEMS WILL BE DISPLAYED --------//
const toolsContainer = document.querySelector('#toolBox');
const toolDetails = document.querySelector('#toolDetails')
async function getToolsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayTools(data);
        } else {
            console.error("HTTP-ERROR: " + response.status);
        }    
    } catch (error) {
        console.error("Fetch error:", error);
    }
    
}
getToolsData();

//------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayTools(toolBox) {
    toolBox.forEach(x => {
        // 1. Outer Card Container
        const thecard = document.createElement('div');
        thecard.classList.add('card');

        //build the card/figure element
        const imageFigure = document.createElement('figure');
        thecard.appendChild(imageFigure)
        
        //build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = x.img;
        thephoto.alt = x.alt;
        thephoto.setAttribute('loading', 'lazy');
        thephoto.setAttribute('width', '180');
        thephoto.setAttribute('height', 'auto');
        imageFigure.appendChild(thephoto);

        
        // build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerHTML = x.name;
        thecard.appendChild(thetitle);
        
        // build the category element
        const theCategory = document.createElement('p');
        theCategory.innerHTML = `Category: ${x.category}`;
        thecard.appendChild(theCategory);
        
        // build the primaryBenefit element
        const thePrimaryBenefit = document.createElement('p');
        thePrimaryBenefit.innerHTML = `Primary Benefit: ${x.primaryBenefit}`;
        thecard.appendChild(thePrimaryBenefit);

        // build the easeOfUse element
        const theEaseOfUse = document.createElement('p');
        theEaseOfUse.innerHTML = `Ease of Use: ${x.easeOfUse}`;
        thecard.appendChild(theEaseOfUse);

        // build the findIt element
        const theFindIt = document.createElement('p');
        theFindIt.innerHTML = `Find It: ${x.findIt}`;
        thecard.appendChild(theFindIt);

        // build the learn more btn
        const cardBtn = document.createElement('button');
        cardBtn.textContent = 'Learn More';
        cardBtn.addEventListener("click", () => {
            displayToolDetails(x)
        })
        thecard.appendChild(cardBtn);

        toolsContainer.appendChild(thecard);
    }); //end loop
} // end function

function displayToolDetails(x) {
    toolDetails.innerHTML = `
            <button id="closeModal">&times;</button>
            <h2>${x.name}:</h2>
            <img src=${x.img} alt=${x.alt}>
            <p>Category: ${x.category}</p>
            <p>Ease of Use: ${x.easeOfUse}</p>
            <p>Description: ${x.longDescription}</p>
            <p>Where to Find: ${x.findIt}</p>
            `;

    toolDetails.showModal();

    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener("click", () => {
        toolDetails.close();
    });
}

//End wdd231/tool_box/directory.js