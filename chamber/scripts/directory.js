const url = 'data/members.json';
const membersContainer = document.querySelector('#members');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let location = document.createElement("p");
        let pNumber = document.createElement("p");
        let years = document.createElement("p");
        let site = document.createElement("a");
        let picture = document.createElement("img");
    
        companyName.textContent = `${member.company}`;
        years.textContent = `${member.years} Years of Business in Colorado Springs`;
        location.textContent = `Address: ${member.address}`;
        pNumber.textContent = `Phone Number: ${member.phone}`;
        site.textContent = `${member.url}`;

        site.setAttribute('href', member.url);

        picture.setAttribute('src', member.imagefile);
        picture.setAttribute('alt', `Picture of ${member.company}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '440');

        card.appendChild(companyName);
        card.appendChild(years);
        card.appendChild(location);
        card.appendChild(pNumber);
        card.appendChild(site);
        card.appendChild(picture);

        membersContainer.appendChild(card);
    });
}