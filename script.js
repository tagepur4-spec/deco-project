document.addEventListener('DOMContentLoaded', function() {
    
    // --- HAMBURGER MENU LOGIC ---
    const navToggle = document.querySelector('#nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.checked = false;
        });
    });

    // --- SCROLL ANIMATION LOGIC ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once visible
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.gallery-item img');
    elementsToAnimate.forEach(element => observer.observe(element));

});