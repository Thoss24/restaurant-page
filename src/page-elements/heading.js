function headerSection() {
   const headerDiv = document.createElement('div');
   headerDiv.id = "header";

   const headerTitle = document.createElement('h1');
   headerTitle.textContent = "MY RESTAURANT";

   const headerList = document.createElement('ul');
   headerList.id = "headerList";
   const headerMenu = document.createElement('li');
   const headerAbout = document.createElement('li');
   const headerContact = document.createElement('li');
   headerMenu.textContent = "MENU";
   headerAbout.textContent = "ABOUT";
   headerContact.textContent = "CONTACT";
   headerList.appendChild(headerMenu);
   headerList.appendChild(headerAbout);
   headerList.appendChild(headerContact);

   headerDiv.appendChild(headerTitle);

   headerDiv.appendChild(headerList)

   return headerDiv;
};

export default headerSection;