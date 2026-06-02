document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Navigation Mechanism
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu immediately if any interior link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('active');
            }
        });
    });

    // 2. Navigation Active Item Tracking on Scroll
    const sections = document.querySelectorAll('main, .grid-layout');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Highlighting updates when user scrolls roughly halfway through a content section
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});