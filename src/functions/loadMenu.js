function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";

    const menuItem1 = document.createElement('img');
    menuItem1.id = "menuItem1";
    menuItem1.src = '../src/images/chili.jpg';

    const menuItem2 = document.createElement('img');
    menuItem2.id = "menuItem2";
    menuItem2.src = '../src/images/pork.jpg';

    const menuItem3 = document.createElement('img');
    menuItem3.id = "menuItem3";
    menuItem3.src = "../src/images/prawn.jpg";

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);

    return menuContainer

}

function loadMenu() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = ""
    bodyArea.appendChild(createMenu())
};

export default loadMenu;