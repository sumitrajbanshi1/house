// Smooth scroll for navigation with offset for fixed navbar
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

// Initialize AOS for scroll animations after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});
