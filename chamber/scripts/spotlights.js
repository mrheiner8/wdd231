const url = 'data/members.json';
const spotlightsContainer = document.querySelector('#spotlights');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    processSpotlights(data.members);
}
getMembersData();

function processSpotlights(members) {
    const highLevelMembers = members.filter(member => member.level == 2 || member.level == 3);

    const shuffled = highLevelMembers.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    displayMembers(selected);
} 

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let location = document.createElement("p");
        let pNumber = document.createElement("p");
        let years = document.createElement("p");
        let site = document.createElement("a");
        let picture = document.createElement("img");

        let level = `${member.level}`;
        if (level == 3) {
            card.classList.add("gold");
        } else if (level == 2) {
            card.classList.add("silver");
        } else {
            card.classList.add("member");
        }

        companyName.textContent = `${member.company}`;
        years.innerHTML = `<strong>${member.years} Years of Business in Colorado Springs</strong>`;
        location.innerHTML = `<strong>Address:</strong> ${member.address}`;
        pNumber.innerHTML = `<strong>Phone Number:</strong> ${member.phone}`;
        site.textContent = `${member.url}`;

        site.setAttribute('href', member.url);

        picture.setAttribute('src', `images/${member.imagefile}`);
        picture.setAttribute('alt', `Picture of ${member.company}`);
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '340');

        card.appendChild(companyName);
        card.appendChild(years);
        card.appendChild(picture);
        card.appendChild(location);
        card.appendChild(pNumber);
        card.appendChild(site);

        spotlightsContainer.appendChild(card);
    });
}