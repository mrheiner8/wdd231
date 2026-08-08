//wdd231/tool_box/thanks.js
// double line/const method
const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

/* single line/const method
const myInfo = new URLSearchParams(window.location.search);*/

/*
console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));
console.log(myInfo.get('tool'));
console.log(myInfo.get('category'));
console.log(myInfo.get('primaryBenefit'));
console.log(myInfo.get('Description'));
console.log(myInfo.get('findIt'));
console.log(myInfo.get('ease_of_use'));
console.log(myInfo.get('timeStamp'));
*/
function formattedPhoneNumber(phoneInput) {
    // 1. Remove all non-numeric characters
    let cleaned = phoneInput.replace(/\D/g, '');

    // 2. If it has 11 digits and starts with '1', trim the '1'
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
        cleaned = cleaned.slice(1);
    }
    // 3. Extract parts using .slice(start, end)
    const area = cleaned.slice(0, 3); // First 3 digits
    const prefix = cleaned.slice(3, 6); // middle 3 digits
    const line = cleaned.slice(6, 10); // Last 4 digits

    // 4. Join them using "."
    return `${area}.${prefix}.${line}`;
}
// Call the function and save it to a variable first
const phoneInput = myInfo.get('phone')
const formattedPhone = formattedPhoneNumber(phoneInput)

document.querySelector('#tool_submission').innerHTML = `
<p><strong>Name:</strong> ${(myInfo.get('first'))} ${(myInfo.get('last'))}</p>

<p><strong>Mobile Phone Number:</strong> ${formattedPhone}</p>

<p><strong>Email:</strong> ${(myInfo.get('email'))}</p>

<p><strong>Tool:</strong> ${(myInfo.get('tool'))}</p>

<p><strong>Category:</strong> ${(myInfo.get('category'))}</p>

<p><strong>Primary Benefit:</strong> ${(myInfo.get('primaryBenefit'))}</p>

<p><strong>Tool Description:</strong> ${(myInfo.get('Description'))}</p>

<p><strong>Where to Find This Tool:</strong> ${(myInfo.get('findIt'))}</p>

<p><strong>Ease of Use:</strong> ${(myInfo.get('ease_of_use'))}</p>

<p><strong>Application Received:</strong> ${(myInfo.get('timeStamp'))}</p>
`
//End wdd231/tool_box/thanks.js
