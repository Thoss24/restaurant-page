function createContact() {

    const contact = document.createElement('div');
    contact.id = "contact-section";

    const contactNumber = document.createElement('p');
    contactNumber.textContent = "12345678901";

    const contactEmail = document.createElement('p');
    contactEmail.textContent = "placeholder@email.com";

    const contactAddress = document.createElement('p');
    contactAddress.textContent = "123 hidden leaf village";

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