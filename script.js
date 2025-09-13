// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    let isScrolling = false;
    let scrollTimeout;
    
    // Remove magnetic scroll: no snap behavior
    // (intentionally left blank)
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link, .cta-button, .logo-link');
    const navIndicator = document.querySelector('.nav-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    isScrolling = true;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    setTimeout(() => {
                        isScrolling = false;
                    }, 1000);
                }
            }
        });
    });

    // Update active section indicator
    function updateActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const navIndicator = document.querySelector('.nav-indicator');
        const logo = document.querySelector('.logo');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        // Check if we're in hero section (before any other section)
        if (scrollPosition < sections[0].offsetTop) {
            currentSection = 'hero';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
        }
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
                
                // Update indicator position
                const linkRect = link.getBoundingClientRect();
                const navRect = link.parentElement.getBoundingClientRect();
                const indicatorLeft = linkRect.left - navRect.left;
                const indicatorWidth = linkRect.width;
                
                navIndicator.style.left = indicatorLeft + 'px';
                navIndicator.style.width = indicatorWidth + 'px';
            }
        });
        
        // If we're in hero section, show indicator under logo text only
        if (currentSection === 'hero') {
            const logoText = document.querySelector('.logo-text');
            const navRect = navLinks[0].parentElement.getBoundingClientRect();
            const textRect = logoText.getBoundingClientRect();
            const indicatorLeft = textRect.left - navRect.left;
            const indicatorWidth = textRect.width;
            navIndicator.style.left = indicatorLeft + 'px';
            navIndicator.style.width = indicatorWidth + 'px';
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial call

    // Statistics toggle functionality
    const sourceToggleButtons = document.querySelectorAll('.source-toggle .toggle-btn');
    const periodToggleButtons = document.querySelectorAll('.period-toggle .toggle-btn');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Current state
    let currentSource = 'together';
    let currentPeriod = '28';
    
    // Source toggle functionality
    sourceToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all source buttons
            sourceToggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current source
            currentSource = this.getAttribute('data-source');
            
            // Update indicator position
            updateToggleIndicator('source');
            
            // Update stat numbers
            updateStatistics();
        });
    });
    
    // Period toggle functionality
    periodToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all period buttons
            periodToggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current period
            currentPeriod = this.getAttribute('data-period');
            
            // Update indicator position
            updateToggleIndicator('period');
            
            // Update stat numbers
            updateStatistics();
        });
    });
    
    // Function to update toggle indicator position
    function updateToggleIndicator(type) {
        const toggleContainer = document.querySelector(`.${type}-toggle`);
        const activeButton = toggleContainer.querySelector('.toggle-btn.active');
        
        if (!activeButton) return;
        
        // Получаем точные размеры и позицию активной кнопки
        const containerRect = toggleContainer.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        // Вычисляем относительную позицию кнопки внутри контейнера
        const leftOffset = buttonRect.left - containerRect.left;
        const buttonWidth = buttonRect.width;
        
        // Учитываем padding контейнера (4px с каждой стороны)
        const adjustedLeft = leftOffset - 4;
        const adjustedWidth = buttonWidth;
        
        // Устанавливаем CSS переменные в пикселях для точного позиционирования
        toggleContainer.style.setProperty('--indicator-left', `${adjustedLeft}px`);
        toggleContainer.style.setProperty('--indicator-width', `${adjustedWidth}px`);
    }
    
    // Function to update statistics based on current source and period
    function updateStatistics() {
        statNumbers.forEach(stat => {
            const newValue = stat.getAttribute(`data-${currentSource}-${currentPeriod}`);
            if (newValue) {
                animateNumber(stat, newValue);
            }
        });
    }
    
    // Fix stat card widths to prevent shaking during animation
    function fixStatCardWidths() {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            // Get the current width and fix it
            const currentWidth = card.offsetWidth;
            card.style.width = currentWidth + 'px';
            card.style.flexShrink = '0';
        });
    }
    
    // Fix widths after page load and window resize
    window.addEventListener('load', fixStatCardWidths);
    window.addEventListener('resize', fixStatCardWidths);
    
    // Also fix widths when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixStatCardWidths);
    } else {
        fixStatCardWidths();
    }
    
    // Initialize toggle indicators
    updateToggleIndicator('source');
    updateToggleIndicator('period');
    
    // Update indicators on window resize
    window.addEventListener('resize', function() {
        setTimeout(() => {
            updateToggleIndicator('source');
            updateToggleIndicator('period');
        }, 100);
    });

    // Header stays dark on scroll - no changes needed

    // Intersection Observer for animations
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.stat-card, .feature-item, .chart-container, .bar-chart');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Toggle feature content
function toggleFeature(element) {
    const featureItem = element.closest('.feature-item');
    const isActive = featureItem.classList.contains('active');
    
    // Close all other feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        featureItem.classList.add('active');
    }
}

// Toggle expandable content
function toggleExpandable(element) {
    const expandableText = element.closest('.expandable-text');
    const isActive = expandableText.classList.contains('active');
    
    // Close all other expandable texts
    document.querySelectorAll('.expandable-text').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        expandableText.classList.add('active');
    }
}

// Animate number changes
function animateNumber(element, newValue) {
    const currentValue = element.textContent;
    
    // Parse current and new values
    const currentParsed = parseValue(currentValue);
    const newParsed = parseValue(newValue);
    
    // If parsing failed, just set the new value
    if (!currentParsed || !newParsed) {
        element.textContent = newValue;
        return;
    }
    
    const duration = 800;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = currentParsed.value + (newParsed.value - currentParsed.value) * easeOutCubic;
        
        // Format number based on target format
        element.textContent = formatValue(current, newParsed.type);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = newValue;
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Parse value and return object with value and type
function parseValue(value) {
    if (!value) return null;
    
    // Handle millions
    if (value.includes('млн')) {
        const num = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
        return { value: num * 1000000, type: 'million' };
    }
    
    // Handle thousands
    if (value.includes('тыс')) {
        const num = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
        return { value: num * 1000, type: 'thousand' };
    }
    
    // Handle time format (минуты и секунды)
    if (value.includes('мин') && value.includes('сек')) {
        const match = value.match(/(\d+)мин(\d+)сек/);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            return { value: minutes * 60 + seconds, type: 'time' };
        }
    }
    
    // Handle regular numbers
    const num = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
    if (!isNaN(num)) {
        return { value: num, type: 'number' };
    }
    
    return null;
}

// Format value based on type
function formatValue(value, type) {
    switch (type) {
        case 'million':
            return (value / 1000000).toFixed(1).replace('.', ',') + ' млн';
        case 'thousand':
            return Math.round(value / 1000) + ' тыс';
        case 'time':
            const minutes = Math.floor(value / 60);
            const seconds = Math.floor(value % 60);
            return `${minutes}мин${seconds}сек`;
        case 'number':
        default:
            return Math.round(value).toString();
    }
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to stat cards (transform only to avoid layout jitter)
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.style.willChange = 'transform';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.toggle-btn, .cta-button, .contact-link');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
