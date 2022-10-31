import initialLoad from "./functions/initialLoad";
import loadContact from "./functions/loadContact";
import loadHome from "./functions/main-elements/loadHome";
import "./style/heading.css";
import "./style/body.css";
import "./style/footer.css";

initialLoad();

const mainArea = document.getElementById('mainDiv');

function loadContactArea() {
const contactButton = document.getElementById('headerContact');
contactButton.addEventListener("click", loadContact)
};
loadContactArea()

function loadHomeArea() {
    const homeButton = document.getElementById('headerHome');
    homeButton.addEventListener('click', loadHome)
}
loadHomeArea()


