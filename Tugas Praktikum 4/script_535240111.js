function toggleNav() {
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.main-content');
    header.classList.toggle('open');
    mainContent.classList.toggle('collapsed');
}

function scrollToSection(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! Thank you.');
    form.reset();
});