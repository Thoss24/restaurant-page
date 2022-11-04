function createMenu() {
    // menu container
    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";

    // menu item 1 area
    const menuItem1Area = document.createElement('div');
    menuItem1Area.id = "menuItem1Area";
    const menuItem1 = document.createElement('img');
    menuItem1.id = "menuItem1";
    menuItem1.src = "../src/images/chili.jpg";
    menuItem1Area.textContent = "Chili Bowl";
    menuItem1Area.appendChild(menuItem1);
   

    // menu item 2 area
    const menuItem2Area = document.createElement('div');
    menuItem2Area.id = "menuItem2Area";
    const menuItem2 = document.createElement('img');
    menuItem2.id = "menuItem2";
    menuItem2.src = '../src/images/pork.jpg';
    menuItem2Area.textContent = "Pork Bowl";
    menuItem2Area.appendChild(menuItem2)

    // menu item 3 area
    const menuItem3Area = document.createElement('div');
    menuItem3Area.id = "menuItem3Area";
    const menuItem3 = document.createElement('img');
    menuItem3.id = "menuItem3";
    menuItem3.src = "../src/images/prawn.jpg";
    menuItem3Area.textContent = "Prawn Bowl";
    menuItem3Area.appendChild(menuItem3);

    // menu item 4 area
    const menuItem4Area = document.createElement('div');
    menuItem4Area.id = "menuItem4Area"
    const menuItem4 = document.createElement('img');
    menuItem4.id = "menuItem4";
    menuItem4.src = "../src/images/white-noodle-soup.jpg";
    menuItem4Area.textContent = "Noodle soup";
    menuItem4Area.appendChild(menuItem4);

    // menu item 5 area
    const menuItem5Area = document.createElement('div');
    menuItem5Area.id = "menuItem5Area";
    const menuItem5 = document.createElement('img');
    menuItem5.id = "menuItem5";
    menuItem5.src = "../src/images/duck-bowl.jpg";
    menuItem5Area.textContent = "Duck bowl";
    menuItem5Area.appendChild(menuItem5);

    // menu item 6 area
    const menuItem6Area = document.createElement('div');
    menuItem6Area.id = "menuItem6Area";
    const menuItem6 = document.createElement('img');
    menuItem6.id = "menuItem5";
    menuItem6.src = "../src/images/pork-cutlet-bowl.jpg";
    menuItem6Area.textContent = "Pork cutlet";
    menuItem6Area.appendChild(menuItem6);

    // append menu items to menu div
    menuContainer.appendChild(menuItem1Area);
    menuContainer.appendChild(menuItem2Area);
    menuContainer.appendChild(menuItem3Area);
    menuContainer.appendChild(menuItem4Area);
    menuContainer.appendChild(menuItem5Area);
    menuContainer.appendChild(menuItem6Area);

    return menuContainer
}

function loadMenu() {
    const bodyArea = document.getElementById('mainDiv');
    bodyArea.textContent = ""
    bodyArea.appendChild(createMenu())
};

export default loadMenu;