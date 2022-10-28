function bodySection() {
    const bodyDiv = document.createElement('div');
    bodyDiv.id = 'bodyArea';

    const mainDiv = document.createElement('div');
    mainDiv.id = 'mainDiv';

    const mainDivTitleArea = document.createElement('div');
    mainDivTitleArea.id = 'mainDivTitleArea';

    const mainDivTitle = document.createElement('h2');
    mainDivTitle.textContent = "Greeting message"

    bodyDiv.appendChild(mainDiv);
    mainDiv.appendChild(mainDivTitleArea);
    mainDivTitleArea.appendChild(mainDivTitle);

    return bodyDiv
};

export default bodySection;

