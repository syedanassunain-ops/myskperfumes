document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out'
    });

    // Clean Scroll and Transition Logic
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 20 ? '0 4px 12px rgba(0,0,0,0.05)' : 'none';
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.72)';
        }
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
