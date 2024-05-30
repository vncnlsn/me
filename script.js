function toggleFolder(folderElement) {
    const fileList = folderElement.nextElementSibling;
    const carrot = folderElement.querySelector('.carrot');
    const folderName = folderElement.querySelector('.folder-name');

    if (fileList.style.display === 'block') {
        fileList.style.display = 'none';
        carrot.style.transform = 'rotate(0deg)';
        folderName.style.color = 'white';
    } else {
        fileList.style.display = 'block';
        carrot.style.transform = 'rotate(90deg)';
        folderName.style.color = 'blue';
    }
}
