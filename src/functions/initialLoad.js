import headerSection from "../page-elements/heading";

const initialLoad = function() {
    const mainContent = document.querySelector('#content');
    const header = headerSection();

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "My Restaurant";

    header.appendChild(headerTitle);

    mainContent.appendChild(header);
};

export default initialLoad;