import headerSection from "../page-elements/heading";
import bodySection from "../page-elements/body";

const initialLoad = function() {
    const mainContent = document.querySelector('#content');
    const header = headerSection();
    const bodyArea = bodySection();

    mainContent.appendChild(header);
    mainContent.appendChild(bodyArea)
};

export default initialLoad;