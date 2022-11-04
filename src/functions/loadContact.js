function createContact() {

    const contact = document.createElement('div');
    contact.id = "contact-section";

    const contactWelcome = document.createElement('h1');
    contactWelcome.textContent = "Contact information"

    const contactNumber = document.createElement('p');
    contactNumber.textContent = "Phone: 12345678901";

    const contactEmail = document.createElement('p');
    contactEmail.textContent = "email: placeholder@email.com";

    const contactAddress = document.createElement('p');
    contactAddress.textContent = "Address: 123 hidden leaf village";

    contact.appendChild(contactWelcome)
    contact.appendChild(contactNumber);
    contact.appendChild(contactEmail);
    contact.appendChild(contactAddress);

    return contact
}
createContact()

function loadContact() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = ""
    bodyArea.appendChild(createContact())
}

export default loadContact;