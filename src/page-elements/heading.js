function headerSection() {
   const headerDiv = document.createElement('div');
   headerDiv.id = "header";

   const headerTitle = document.createElement('h1');
   headerTitle.textContent = "HOKAGE NOODLE BAR";

   const headerList = document.createElement('ul');
   headerList.id = "headerList";
   const headerMenu = document.createElement('li');
   const headerAbout = document.createElement('li');
   const headerContact = document.createElement('li');
   const headerHome = document.createElement('li');
   headerMenu.textContent = "MENU";
   headerAbout.textContent = "ABOUT";
   headerContact.textContent = "CONTACT";
   headerHome.textContent = "HOME";
   headerList.appendChild(headerMenu);
   headerList.appendChild(headerAbout);
   headerList.appendChild(headerContact);
   headerList.appendChild(headerHome);

   headerDiv.appendChild(headerTitle);

   headerDiv.appendChild(headerList)

   return headerDiv
};

export default headerSection;