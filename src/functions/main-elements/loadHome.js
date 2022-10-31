function createHome() {

    const homeArea = document.createElement('div');

    const homeGreeting = document.createElement('h1');
    homeGreeting.textContent = "Welcome to HOKAGE NOODLE BAR";

    const homeDescription = document.createElement('p');
    homeDescription.textContent = "Please look at our menu which includes a wide range of different ramen for you to enjoy";

    homeArea.appendChild(homeGreeting);
    homeArea.appendChild(homeDescription);

    return homeArea
}

function loadHome() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = "";
    bodyArea.appendChild(createHome())
};

export default loadHome