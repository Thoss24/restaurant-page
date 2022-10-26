function headerSection() {
   const headerDiv = document.createElement('div');
   headerDiv.id = "header";

   const headerTitle = document.createElement('h1');
   headerTitle.textContent = "My Restaurant";

   headerDiv.appendChild(headerTitle);

   return headerDiv;
};

export default headerSection;