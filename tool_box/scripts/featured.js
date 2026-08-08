//---- featured.js
const url = 'data/tools.json';
//-------- GRAB THE REFERENCE TO THE SECTION WHERE THE ITEMS WILL BE DISPLAYED --------//
const toolsContainer = document.querySelector('#feature-cards');
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


const displayfeatured = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let location = document.createElement("p");
        let pNumber = document.createElement("p");
        let years = document.createElement("p");
        let site = document.createElement("a");
        let picture = document.createElement("img");


        companyName.textContent = `${member.company}`;
        years.innerHTML = `<strong>${member.years} Years of Business in Colorado Springs</strong>`;
        location.innerHTML = `<strong>Address:</strong> ${member.address}`;
        pNumber.innerHTML = `<strong>Phone Number:</strong> ${member.phone}`;
        site.textContent = `${member.url}`;

        site.setAttribute('href', member.url);

        picture.setAttribute('src', `images/${member.imagefile}`);
        picture.setAttribute('alt', `Picture of ${member.company}`);
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '200');

        card.appendChild(companyName);
        card.appendChild(years);
        card.appendChild(picture);
        card.appendChild(location);
        card.appendChild(pNumber);
        card.appendChild(site);

        spotlightsContainer.appendChild(card);
    });
}
//---- End featured.js