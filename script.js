// Add a class to the navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.9)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.8)';
    }
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(image => observer.observe(image));