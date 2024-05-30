document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Event delegation for navigation links
    sidebar.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target;
        if (target.tagName === 'A') {
            const noteId = target.getAttribute('href').substring(1);
            showContent(noteId);
        }
    });

    // Show content function
    function showContent(noteId) {
        const noteContent = document.getElementById(noteId);
        if (noteContent) {
            // Hide all note contents
            const noteContents = document.querySelectorAll('.note-content');
            noteContents.forEach(content => {
                content.classList.remove('active');
            });
            // Show the selected note content
            noteContent.classList.add('active');
        }
    }

    // Event listener for overview link
    const overviewLink = document.getElementById('overview-link');
    const overviewContent = document.getElementById('overview');

    overviewLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Toggle class for overview link
        overviewLink.classList.toggle('overview-active');

        // Toggle display for overview content
        if (overviewContent.style.display === 'block') {
            overviewContent.style.display = 'none';
            // Reset styles to normal when hiding
            overviewLink.style.fontWeight = 'normal';
            overviewLink.style.color = 'white';
        } else {
            overviewContent.style.display = 'block';
            // Apply styles for active state
            overviewLink.style.fontWeight = 'bold';
            overviewLink.style.color = 'orange';
        }

        // Reset other folder styles
        resetFolderStyles(sidebar, overviewLink);
    });

    // Function to reset folder styles
    function resetFolderStyles(sidebar, overviewLink) {
        const folders = sidebar.querySelectorAll('.folder');
        folders.forEach(folder => {
            if (folder !== overviewLink.parentElement) {
                const carrot = folder.querySelector('.carrot');
                const folderName = folder.querySelector('.folder-name');
                const fileList = folder.nextElementSibling;
                // Reset styles to normal
                fileList.style.display = 'none';
                carrot.style.transform = 'rotate(0deg)';
                carrot.style.color = 'white';
                folderName.style.color = 'white';
                folderName.style.fontWeight = 'normal';
            }
        });
    }
});
