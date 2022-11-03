import headerSection from "../page-elements/heading";
import bodySection from "../page-elements/body";
import footerSection from "../page-elements/footer";
import loadHome from "./main-elements/loadHome";

const initialLoad = function() {
    const mainContent = document.querySelector('#content');
    const header = headerSection();
    const bodyArea = bodySection();
    const footerArea = footerSection();

    mainContent.appendChild(header);
    mainContent.appendChild(bodyArea);
    mainContent.appendChild(footerArea)

    loadHome()
};

export default initialLoad;