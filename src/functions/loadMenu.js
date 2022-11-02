function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";

    const menuItem1 = document.createElement('img');
    menuItem1.src = '../src/images/chili.jpg';

    menuContainer.appendChild(menuItem1);

    return menuContainer

}

function loadMenu() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = ""
    bodyArea.appendChild(createMenu())
};

export default loadMenu;