// --- NAVBAR LOGIC ---
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.checked = false;
    });
});


// --- SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(image => observer.observe(image));