import headerSection from "../page-elements/heading";

const initialLoad = function() {
    const mainContent = document.querySelector('#content');
    const header = headerSection();

    mainContent.appendChild(header);
};

export default initialLoad;