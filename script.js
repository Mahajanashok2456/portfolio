document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .timeline-item, .cert-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    e.target.reset();
});

document.querySelector('.see-more-btn')?.addEventListener('click', function() {
    const hiddenCerts = document.querySelectorAll('.cert-card.hidden');
    const isExpanded = this.classList.contains('expanded');
    
    if (isExpanded) {
        hiddenCerts.forEach(cert => cert.classList.add('hidden'));
        this.textContent = 'See More Certifications';
        this.classList.remove('expanded');
    } else {
        hiddenCerts.forEach(cert => cert.classList.remove('hidden'));
        this.textContent = 'Show Less';
        this.classList.add('expanded');
    }
});

if (typeof lottie !== 'undefined') {
    lottie.loadAnimation({
        container: document.getElementById('lottie-rocket'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'rocket no blackground.json'
    });
}
