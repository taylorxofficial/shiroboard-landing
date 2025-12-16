document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle (placeholder logic for now)
    const toggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('header');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const nav = document.querySelector('nav');
            nav.classList.toggle('mobile-open');

            // Animate hamburger to X
            const spans = toggle.querySelectorAll('span');
            if (nav.classList.contains('mobile-open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
