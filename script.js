document.addEventListener("DOMContentLoaded", function() {
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            const notes = this.nextElementSibling;
            notes.classList.toggle("active");
        });
    });
});
