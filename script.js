window.sr = ScrollReveal();

sr.reveal('.reveal', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    delay: 200
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});