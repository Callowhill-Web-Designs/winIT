// ─────────────────────────────────────────────────────────────────────────────
// BLOG PAGE FUNCTIONALITY
// Search and filter functionality for the blog page
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const categoryTabs = document.querySelectorAll('.cs-tab');
    const blogCards = document.querySelectorAll('.cs-blog-card');
    const blogGrid = document.getElementById('blog-grid');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchTerm = e.target.value.toLowerCase();
            filterBlogPosts();
        });
    }

    // Category filter functionality
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('cs-tab-active'));
            
            // Add active class to clicked tab
            this.classList.add('cs-tab-active');
            
            // Update current category
            currentCategory = this.getAttribute('data-category');
            
            // Filter posts
            filterBlogPosts();
        });
    });

    function filterBlogPosts() {
        let visibleCount = 0;

        blogCards.forEach(card => {
            const cardTitle = card.querySelector('.cs-card-title a').textContent.toLowerCase();
            const cardDescription = card.querySelector('.cs-card-description').textContent.toLowerCase();
            const cardTags = card.getAttribute('data-tags').toLowerCase();
            
            // Check if card matches search term
            const matchesSearch = currentSearchTerm === '' || 
                cardTitle.includes(currentSearchTerm) || 
                cardDescription.includes(currentSearchTerm) ||
                cardTags.includes(currentSearchTerm);
            
            // Check if card matches category filter
            const matchesCategory = currentCategory === 'all' || 
                cardTags.includes(currentCategory.toLowerCase());
            
            // Show/hide card based on filters
            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
                visibleCount++;
                
                // Add animation delay for staggered effect
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, visibleCount * 50);
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            }
        });

        // Show/hide no results message
        showNoResultsMessage(visibleCount === 0);
    }

    function showNoResultsMessage(show) {
        let noResultsMessage = document.querySelector('.cs-no-results');
        
        if (show && !noResultsMessage) {
            noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'cs-no-results';
            noResultsMessage.innerHTML = `
                <div class="cs-no-posts">
                    <h2>No Articles Found</h2>
                    <p>Try adjusting your search terms or category filter.</p>
                </div>
            `;
            blogGrid.appendChild(noResultsMessage);
        } else if (!show && noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    // Initialize card styles for animations
    blogCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    // Smooth scroll for category tabs on mobile
    const categoryTabsContainer = document.querySelector('.cs-category-tabs');
    if (categoryTabsContainer) {
        categoryTabsContainer.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                this.scrollLeft += e.deltaY;
            }
        });
    }

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe blog cards for scroll animations
    blogCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
});
