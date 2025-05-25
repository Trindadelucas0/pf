// Inicializa o ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
});

// Aplica animações aos elementos
sr.reveal('.features-grid', { interval: 100 });
sr.reveal('.pricing-grid', { interval: 100 });
sr.reveal('.for-you-grid', { interval: 100 });
sr.reveal('.testimonials-grid', { interval: 100 });
sr.reveal('.faq-grid', { interval: 100 });

// Animação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Controle do botão flutuante
const floatingButton = document.querySelector('.floating-button');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        floatingButton.style.transform = 'translateY(100px)';
    } else {
        // Rolando para cima
        floatingButton.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Adiciona classe de animação aos elementos quando entram na viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-item, .pricing-card, .for-you-item, .testimonial-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate-fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Adiciona efeito hover nos botões
const buttons = document.querySelectorAll('.cta-button, .cta-button-small, .pricing-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}); 