// About Page Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Animated Counter for Story Stats
    const counterElements = document.querySelectorAll('#our-story .cs-stat-number');
    
    function animateCounter(element) {
        const target = element.getAttribute('data-count');
        const isPercentage = target.includes('%');
        const hasPlus = target.includes('+');
        const isDecimal = target.includes('.');
        const isTime = target.includes('/');
        
        let numericTarget;
        let suffix = '';
        
        if (isTime) {
            // Handle 24/7 case
            element.textContent = target;
            return;
        } else if (isPercentage) {
            numericTarget = parseFloat(target.replace('%', ''));
            suffix = '%';
        } else if (hasPlus) {
            numericTarget = parseInt(target.replace('+', ''));
            suffix = '+';
        } else {
            numericTarget = parseFloat(target);
        }
        
        const increment = numericTarget / 80; // Animation frames (80 for smoother animation)
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                current = numericTarget;
                clearInterval(timer);
            }
            
            // Format the number appropriately
            let displayValue;
            if (isDecimal) {
                displayValue = current.toFixed(1);
            } else {
                displayValue = Math.floor(current);
            }
            
            element.textContent = displayValue + suffix;
        }, 25); // 25ms for smooth animation
    }
    
    // Intersection Observer for triggering animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.cs-stat-number');
                counters.forEach(counter => {
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        // Add a slight delay for staggered animation effect
                        const delay = Array.from(counters).indexOf(counter) * 100;
                        setTimeout(() => {
                            animateCounter(counter);
                        }, delay);
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe the story stats section
    const storyStatsSection = document.querySelector('#our-story .cs-story-stats');
    if (storyStatsSection) {
        observer.observe(storyStatsSection);
    }
    
    // Add entrance animations for stat items
    const statItems = document.querySelectorAll('#our-story .cs-stat-item');
    statItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Staggered entrance animation
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Floating animation for background shapes
    const shapes = document.querySelectorAll('#our-story .cs-shape');
    shapes.forEach((shape, index) => {
        const duration = 8 + (index * 2); // Varying duration for each shape
        const delay = index * 1; // Staggered start
        
        shape.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
});
