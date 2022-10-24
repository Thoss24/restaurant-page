// html elements
const mainContent = document.getElementById('content');
const header = document.createElement('header');
const body = document.createElement('main');
const footer = document.createElement('footer');

mainContent.appendChild(header);
mainContent.appendChild(body);
mainContent.appendChild(footer);

// header
const headerMainContent = document.createElement('div');
const headerTitle = document.createElement('h1');
headerTitle.textContent = "Restaurant page";

headerMainContent.appendChild(headerTitle)
header.appendChild(headerMainContent);

// body
const bodyMainContent = document.createElement('div');
bodyMainContent.textContent = "This is my restaurant. We serve a beautiful seasonal menu, with fresh, locally sourced meat and vegetables. Our house specialty is our renowned lancashire hot-pot.";

body.appendChild(bodyMainContent);

// footer
const footerMainContent = document.createElement('div');
const footerTitle = document.createElement('h3');

footerTitle.textContent = "Restaurant page by Thoss24";

footerMainContent.appendChild(footerTitle);
footer.appendChild(footerMainContent);

// css
header.style.height = "10vh";
body.style.height = "80vh";
footer.style.height = "10vh";