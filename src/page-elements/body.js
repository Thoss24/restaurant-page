function bodySection() {
    const bodyDiv = document.createElement('div');
    bodyDiv.id = 'bodyArea';

    const mainDiv = document.createElement('div');
    mainDiv.id = 'mainDiv';

    const mainDivTitleArea = document.createElement('div');
    mainDivTitleArea.id = 'mainDivTitleArea';
    

    bodyDiv.appendChild(mainDiv);
    mainDiv.appendChild(mainDivTitleArea);
    

    return bodyDiv
};

export default bodySection;

