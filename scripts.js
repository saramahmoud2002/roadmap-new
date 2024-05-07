document.addEventListener('DOMContentLoaded', function () {
    const majorLinks = document.querySelectorAll('.major-link');
    majorLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const majorName = this.textContent;
            alert('You clicked on ' + majorName);
        });
    });
});
