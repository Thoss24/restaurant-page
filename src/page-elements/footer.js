function footerSection() {
    const footerArea = document.createElement('footer');
    footerArea.id = 'footerArea';

    const footerAreaContent = document.createElement('div');
    footerAreaContent.id = 'footerAreaContent';

    const img = document.createElement('img');
    img.src = '../src/images/GitHub-Mark-Light-32px.png';

    const footContentTitle = document.createElement('h2');
    footContentTitle.textContent = 'Copyright ' + ('\u00A9') + ' 2022 ' + 'Thoss24';
    footContentTitle.appendChild(img)

    footerArea.appendChild(footerAreaContent);
    footerAreaContent.appendChild(footContentTitle)

    return footerArea;
}

export default footerSection;