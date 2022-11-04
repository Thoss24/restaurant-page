import initialLoad from "./functions/initialLoad";
import loadContact from "./functions/loadContact";
import loadHome from "./functions/main-elements/loadHome";
import loadAbout from "./functions/main-elements/loadAbout";
import loadMenu from "./functions/loadMenu";
import "./style/heading.css";
import "./style/body.css";
import "./style/footer.css";
import "./style/menuArea.css";
import "./style/aboutArea.css"

initialLoad();

const mainArea = document.getElementById('mainDiv');

function loadContactArea() {
const contactButton = document.getElementById('headerContact');
contactButton.addEventListener("click", loadContact)
}
loadContactArea();

function loadHomeArea() {
    const homeButton = document.getElementById('headerHome');
    homeButton.addEventListener('click', loadHome)
}
loadHomeArea();

function loadABoutArea() {
    const aboutButton = document.getElementById('headerAbout');
    aboutButton.addEventListener("click", loadAbout)
}
loadABoutArea();

function loadMenuArea() {
    const menuButton = document.getElementById('headerMenu');
    menuButton.addEventListener("click", loadMenu)
}
loadMenuArea()


