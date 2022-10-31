function headerSection() {
   const headerDiv = document.createElement('div');
   headerDiv.id = "header";

   const headerTitle = document.createElement('h1');
   headerTitle.textContent = "HOKAGE NOODLE BAR";

   const headerList = document.createElement('ul');
   headerList.id = "headerList";

   const headerMenu = document.createElement('li');
   headerMenu.id = "headerMenu";

   const headerAbout = document.createElement('li');
   headerAbout.id = "headerAbout";

   const headerContact = document.createElement('li');
   headerContact.id = "headerContact"

   const headerHome = document.createElement('li');
   headerHome.id = "headerHome";

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