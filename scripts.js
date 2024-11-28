window.addEventListener('scroll', function() {
    const projects = document.getElementById('projects');
    if (window.scrollY + window.innerHeight > projects.offsetTop + 100) {
        projects.classList.add('fadeIn');
    }
});
