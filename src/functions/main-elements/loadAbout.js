function createAbout() {

    const aboutArea = document.createElement('div');
    aboutArea.id = "aboutArea";

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About HOKAGE NOODLE";

    const aboutDescription = document.createElement('div');
    aboutDescription.innerHTML = "HOKAGE NOODLE bar was opened 20 years ago as a street" + "<br>" +  "vendor and only served Tonkotsu ramen bowls." + "<br>" + "However, over the years the popularity of the food kept growing" + "<br>" + "until we eventually opened our restaurant. " + "<br>" + "We now serve Miso, Shoyu, Shio, Tsukemen and many other ramen dishes as well.";

    aboutArea.appendChild(aboutTitle);
    aboutArea.appendChild(aboutDescription);

    return aboutArea
}

function loadAbout() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = ""
    bodyArea.appendChild(createAbout())
};

export default loadAbout;