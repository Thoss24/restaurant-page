function footerSection() {
    const footerArea = document.createElement('footer');
    footerArea.id = 'footerArea';

    const footerAreaContent = document.createElement('div');
    footerAreaContent.id = 'footerAreaContent';

    const footContentTitle = document.createElement('h2');
    footContentTitle.textContent = 'Restaurant footer';

    footerArea.appendChild(footerAreaContent);
    footerAreaContent.appendChild(footContentTitle)

    return footerArea;
}

export default footerSection;