function toggleFolder(folderElement) {
    const fileList = folderElement.nextElementSibling;
    const carrot = folderElement.querySelector('.carrot');
    const folderName = folderElement.querySelector('.folder-name');

    if (fileList.style.display === 'block') {
        fileList.style.display = 'none';
        carrot.style.transform = 'rotate(0deg)';
        carrot.style.color = 'white';
        folderName.style.color = 'white';
        folderName.style.fontWeight = 'normal';
    } else {
        fileList.style.display = 'block';
        carrot.style.transform = 'rotate(90deg)';
        carrot.style.color = 'orange';
        folderName.style.color = 'white';
        folderName.style.fontWeight = 'bold';
    }
}

function showContent(event, noteId) {
    event.preventDefault();

    // Hide all note contents
    const noteContents = document.querySelectorAll('.note-content');
    noteContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected note content
    const noteContent = document.getElementById(noteId);
    if (noteContent) {
        noteContent.classList.add('active');
    }

    // Remove active class from all links
    const links = document.querySelectorAll('.file-list li a');
    links.forEach(link => {
        link.style.color = 'white';
    });

    // Set active link color to orange
    event.target.style.color = 'orange';
}
