// Hero Section Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Animated Counter for Stats
    const counterElements = document.querySelectorAll('.cs-stat-number');
    
    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-count'));
        const increment = target / 100; // Animation frames
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number appropriately
            if (target === 99.9) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }
    
    // Intersection Observer for triggering animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.cs-stat-number');
                counters.forEach(counter => {
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter);
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe the stats section
    const statsSection = document.querySelector('.cs-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Enhanced floating animation for better performance
    function createFloatingParticles() {
        const heroSection = document.querySelector('#hero-tech');
        if (!heroSection) return;
        
        // Create additional floating particles dynamically
        const particleContainer = heroSection.querySelector('.cs-floating-elements');
        if (!particleContainer) return;
        
        for (let i = 7; i <= 12; i++) {
            const particle = document.createElement('div');
            particle.className = `cs-float-element cs-element-${i}`;
            particle.style.width = Math.random() * 10 + 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            particleContainer.appendChild(particle);
        }
    }
    
    // Add scroll-based parallax effect
    function handleScrollParallax() {
        const heroSection = document.querySelector('#hero-tech');
        if (!heroSection) return;
        
        const scrolled = window.pageYOffset;
        const parallaxElements = heroSection.querySelectorAll('.cs-float-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // Throttled scroll handler for better performance
    let ticking = false;
    function updateParallax() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScrollParallax();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Initialize
    createFloatingParticles();
    
    // Event listeners
    window.addEventListener('scroll', updateParallax);
    
    // Add dynamic gradient animation to accent text
    function animateAccentGradient() {
        const accentElement = document.querySelector('.cs-accent');
        if (!accentElement) return;
        
        let hue = 200;
        let direction = 1; // 1 for increasing, -1 for decreasing
        
        setInterval(() => {
            hue += direction * 1.5; // Faster transition for more dynamic effect
            
            // Reverse direction when reaching the bounds
            if (hue >= 270) {
                direction = -1;
            } else if (hue <= 200) {
                direction = 1;
            }
            
            const gradient = `linear-gradient(135deg, hsl(${hue}, 100%, 60%) 0%, hsl(${hue + 30}, 100%, 70%) 100%)`;
            accentElement.style.background = gradient;
            accentElement.style.backgroundClip = 'text';
            accentElement.style.webkitBackgroundClip = 'text';
        }, 100);
    }
    
    // Start gradient animation
    setTimeout(() => {
        animateAccentGradient();
    }, 2000);
});
