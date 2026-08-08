//---- featured.js
const url = 'data/tools.json';
//-------- GRAB THE REFERENCE TO THE SECTION WHERE THE ITEMS WILL BE DISPLAYED --------//
const toolsContainer = document.querySelector('#feature-cards');
async function getToolsData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //slice only a few tools featured tools on the home page.
            const shuffled = data.sort(() => 0.5 - Math.random());
            const featuredTools = shuffled.slice(0, 3);
            displayTools(featuredTools);
        } else {
            console.error("HTTP-ERROR: " + response.status);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

}
getToolsData();


const displayTools = (tools) => {
    tools.forEach((tool) => {
        let card = document.createElement("section");
        let toolName = document.createElement("h2");
        let primaryBenefit = document.createElement("p");
        let easeOfUse = document.createElement("p");
        let category = document.createElement("p");
        let picture = document.createElement("img");


        toolName.textContent = tool.name;
        category.innerHTML = `<strong>Category:</strong> ${tool.category}`;
        primaryBenefit.innerHTML = `<strong>Primary Benefit:</strong> ${tool.primaryBenefit}`;
        easeOfUse.innerHTML = `<strong>Ease Of Use:</strong> ${tool.easeOfUse}`;
   

        picture.setAttribute('src', tool.img);
        picture.setAttribute('alt', tool.alt);
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '200');

        card.appendChild(toolName);
        card.appendChild(picture);
        card.appendChild(category);
        card.appendChild(primaryBenefit);
        card.appendChild(easeOfUse);

        toolsContainer.appendChild(card);
    });
}
//---- End featured.js

                            