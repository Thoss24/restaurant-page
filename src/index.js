import initialLoad from "./functions/initialLoad";
import loadContact from "./functions/loadContact";
import "./style/heading.css";
import "./style/body.css";
import "./style/footer.css";

initialLoad();

const mainArea = document.getElementById('mainDiv');


const loadTest = document.createElement('button');

loadTest.addEventListener('click', loadContact)

mainArea.appendChild(loadTest)