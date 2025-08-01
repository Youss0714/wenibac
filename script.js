// Global variables
let currentLanguage = 'en';
let currentTestimonial = 0;
let testimonialInterval;

// DOM elements - Initialize after DOM is loaded
let navbar, navToggle, navMenu, langToggle, currentLangElement, testimonialsCarousel, contactForm, loadingIndicator;

function initializeDOMElements() {
    navbar = document.getElementById('navbar');
    navToggle = document.getElementById('navToggle');
    navMenu = document.getElementById('navMenu');
    langToggle = document.getElementById('langToggle');
    currentLangElement = document.getElementById('currentLang');
    testimonialsCarousel = document.getElementById('testimonialsCarousel');
    contactForm = document.getElementById('contactForm');
    loadingIndicator = document.getElementById('loadingIndicator');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Ensure translations are loaded before initializing
    if (typeof translations !== 'undefined' && typeof getTranslation === 'function') {
        initializeApp();
    } else {
        console.error('Translations not loaded');
        // Retry after a short delay
        setTimeout(() => {
            if (typeof translations !== 'undefined' && typeof getTranslation === 'function') {
                initializeApp();
            } else {
                console.error('Translations still not available after retry');
            }
        }, 100);
    }
});

function initializeApp() {
    // Initialize DOM elements first
    initializeDOMElements();
    
    setupNavigation();
    setupLanguageSwitcher();
    setupScrollEffects();
    setupTestimonials();
    setupContactForm();
    setupHeroButtons();
    setupServiceButtons();
    setupLazyLoading();
    setupGoogleMaps();
    setupAnimations();
    setupCargoCarousel();

    setupChatbot();
    
    // Set initial language
    setLanguage(currentLanguage);
    
    console.log('Wenibac Advanced Shipping website initialized successfully');
}

// Navigation functionality
function setupNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Handle smooth scrolling
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Language switcher functionality
function setupLanguageSwitcher() {
    if (!langToggle) {
        console.error('Language toggle button not found');
        return;
    }
    
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        setLanguage(currentLanguage);
    });
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Check if translations are available
    if (typeof getTranslation !== 'function') {
        console.error('Translation function not available');
        return;
    }
    
    if (currentLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
    }
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });
    
    // Update form options
    updateFormOptions(lang);
    
    // Update meta tags
    updateMetaTags(lang);
    
    console.log(`Language switched to: ${lang}`);
}

function updateFormOptions(lang) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option[data-translate]');
        options.forEach(option => {
            const key = option.getAttribute('data-translate');
            const translation = getTranslation(key, lang);
            if (translation) {
                option.textContent = translation;
            }
        });
    }
}

function updateMetaTags(lang) {
    const title = getTranslation('meta.title', lang);
    const description = getTranslation('meta.description', lang);
    
    if (title) {
        document.title = title;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = title;
    }
    
    if (description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = description;
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.content = description;
    }
}

// Scroll effects
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section[id]');
    const scrollPos = window.pageYOffset + navbar.offsetHeight + 50;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                updateActiveNavLink(activeLink);
            }
        }
    });
}

// Testimonials carousel
function setupTestimonials() {
    if (!testimonialsCarousel) return;
    
    const slides = testimonialsCarousel.querySelectorAll('.testimonial-slide');
    if (slides.length === 0) return;
    
    function showTestimonial(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % slides.length;
        showTestimonial(currentTestimonial);
    }
    
    // Auto-rotate testimonials
    testimonialInterval = setInterval(nextTestimonial, 5000);
    
    // Pause on hover
    testimonialsCarousel.addEventListener('mouseenter', function() {
        clearInterval(testimonialInterval);
    });
    
    testimonialsCarousel.addEventListener('mouseleave', function() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    });
    
    // Initialize first testimonial
    showTestimonial(0);
}

// Contact form functionality
function setupContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateForm() {
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        errorMessage = getTranslation('form.errors.required', currentLanguage) || 'Ce champ est requis';
        isValid = false;
    }
    
    // Email validation
    else if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = getTranslation('form.errors.invalid_email', currentLanguage) || 'Adresse email invalide';
            isValid = false;
        }
    }
    
    // Phone validation
    else if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            errorMessage = getTranslation('form.errors.invalid_phone', currentLanguage) || 'Numéro de téléphone invalide';
            isValid = false;
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.textContent = '';
}

async function submitForm() {
    showLoading(true);
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        console.log('Submitting form with data:', data);
        
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            console.log('Form submitted successfully');
            
            // Show success message
            showFormSuccess(result.message);
            
            // Reset form
            contactForm.reset();
        } else {
            console.error('Form submission error:', result.message);
            showFormError(result.message || 'Une erreur est survenue lors de l\'envoi.');
        }
        
    } catch (error) {
        console.error('Network error:', error);
        showFormError('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
        showLoading(false);
    }
}

function showFormSuccess(customMessage = null) {
    const successMessage = customMessage || 
        getTranslation('form.success', currentLanguage) || 
        'Merci pour votre message ! Nous vous contacterons bientôt.';
    
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${successMessage}</span>
        </div>
    `;
    
    // Add CSS for notification
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .success-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #10b981;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function showFormError(errorMessage) {
    // Create error notification
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-exclamation-circle"></i>
            <span>${errorMessage}</span>
        </div>
    `;
    
    // Add CSS for error notification if not already added
    if (!document.getElementById('error-notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'error-notification-styles';
        styles.textContent = `
            .error-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #ef4444;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            
            .error-notification .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .error-notification i {
                font-size: 1.25rem;
                flex-shrink: 0;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove notification after 7 seconds (longer for error messages)
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 7000);
}

function showLoading(show) {
    if (show) {
        loadingIndicator.classList.add('active');
    } else {
        loadingIndicator.classList.remove('active');
    }
}

// Lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Google Maps integration
function setupGoogleMaps() {
    // This function will be called when Google Maps API is loaded
    window.initMap = function() {
        // GIFF Complex, Tema Port coordinates (more precise location)
        const giffComplexLocation = { lat: 5.6152, lng: 0.0167 }; // GIFF Complex, Tema Port
        
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: giffComplexLocation,
            mapTypeId: 'roadmap',
            styles: [
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#3b82f6' }]
                },
                {
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [{ color: '#f3f4f6' }]
                },
                {
                    featureType: 'poi.business',
                    elementType: 'labels',
                    stylers: [{ visibility: 'on' }]
                }
            ]
        });
        
        const marker = new google.maps.Marker({
            position: giffComplexLocation,
            map: map,
            title: 'Wenibac Advanced Shipping Ltd.',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#1e3a8a',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 2,
                scale: 8
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 15px; font-family: Inter, sans-serif; max-width: 250px;">
                    <h3 style="margin: 0 0 8px 0; color: #1e3a8a; font-size: 16px; font-weight: 600;">Wenibac Advanced Shipping Ltd.</h3>
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
                        <strong>GIFF Complex, Room 209</strong><br>
                        Tema Port, Ghana
                    </p>
                    <div style="margin: 8px 0; color: #374151; font-size: 13px;">
                        <p style="margin: 2px 0;"><i class="fas fa-phone" style="color: #3b82f6; width: 16px;"></i> +233303214304</p>
                        <p style="margin: 2px 0;"><i class="fas fa-envelope" style="color: #3b82f6; width: 16px;"></i> wenibac67@gmail.com</p>
                    </div>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=5.6152,0.0167" 
                       target="_blank" 
                       style="display: inline-block; margin-top: 8px; padding: 6px 12px; background: #3b82f6; color: white; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: 500;">
                        Obtenir des directions
                    </a>
                </div>
            `
        });
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        
        console.log('Google Maps initialized successfully');
    };
    
    // Handle case where Google Maps API is not available
    setTimeout(() => {
        if (typeof google === 'undefined') {
            const mapPlaceholder = document.getElementById('map');
            if (mapPlaceholder && mapPlaceholder.classList.contains('map-placeholder')) {
                console.log('Google Maps API not available, using placeholder');
            }
        }
    }, 3000);
}

// Animations and scroll effects
function setupAnimations() {
    // Intersection Observer for fade-in animations
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements with animation classes
        document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            animationObserver.observe(el);
        });
    }
}

// Cargo carousel functionality
function setupCargoCarousel() {
    const cargoCarousel = document.querySelector('.cargo-carousel');
    if (!cargoCarousel) return;
    
    const images = cargoCarousel.querySelectorAll('.carousel-image');
    const indicators = cargoCarousel.querySelectorAll('.carousel-indicators .indicator');
    let currentSlide = 0;
    let carouselInterval;
    
    function showSlide(index) {
        // Remove active class from all images and indicators
        images.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Add active class to current slide
        images[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % images.length;
        showSlide(next);
    }
    
    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 4000); // Change every 4 seconds
    }
    
    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
    }
    
    // Add click handlers for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopCarousel();
            startCarousel(); // Restart the timer
        });
    });
    
    // Pause on hover
    cargoCarousel.addEventListener('mouseenter', stopCarousel);
    cargoCarousel.addEventListener('mouseleave', startCarousel);
    
    // Start the carousel
    startCarousel();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Hero buttons functionality
function setupHeroButtons() {
    // Quote button functionality
    const quoteBtn = document.querySelector('.hero-actions .btn-primary[data-translate="hero.quote_btn"]');
    const learnMoreBtn = document.querySelector('.hero-actions .btn-outline[data-translate="hero.learn_more"]');
    
    if (quoteBtn) {
        quoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on the first form field after scrolling
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input, textarea');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 800);
            }
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on the first form field after scrolling
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input, textarea');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 800);
            }
        });
    }
}

// WhatsApp integration
function openWhatsApp(message = '') {
    const phone = '233303214304'; // Updated with correct WhatsApp number
    const defaultMessage = getTranslation('whatsapp.default_message', currentLanguage) || 
        'Bonjour, je souhaiterais obtenir plus d\'informations sur vos services.';
    
    const finalMessage = message || defaultMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Hero image rotation functionality
function setupHeroImageRotation() {
    const heroSection = document.querySelector('.hero-section');
    const indicators = document.querySelectorAll('.indicator');
    if (!heroSection || indicators.length === 0) return;
    
    let currentImage = 1;
    const totalImages = 2;
    let rotationInterval;
    
    function updateHeroImage(imageNumber) {
        currentImage = imageNumber;
        
        // Update hero section class
        if (currentImage === 2) {
            heroSection.classList.add('image-2');
        } else {
            heroSection.classList.remove('image-2');
        }
        
        // Update indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            if (parseInt(indicator.dataset.image) === currentImage) {
                indicator.classList.add('active');
            }
        });
    }
    
    function rotateHeroImage() {
        const nextImage = currentImage === 1 ? 2 : 1;
        updateHeroImage(nextImage);
    }
    
    // Auto-rotate images every 8 seconds
    function startRotation() {
        rotationInterval = setInterval(rotateHeroImage, 8000);
    }
    
    function stopRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
        }
    }
    
    // Add click handlers to indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const imageNumber = parseInt(this.dataset.image);
            updateHeroImage(imageNumber);
            
            // Restart rotation timer
            stopRotation();
            startRotation();
        });
    });
    
    // Start automatic rotation
    startRotation();
    
    // Pause rotation on hero hover, resume on leave
    heroSection.addEventListener('mouseenter', stopRotation);
    heroSection.addEventListener('mouseleave', startRotation);
    
    // Preload the second image for smooth transitions
    const img = new Image();
    img.src = 'assets/images/tema-port-hero-new2.png';
}

// Add WhatsApp click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero image rotation
    setupHeroImageRotation();
    
    document.querySelectorAll('.btn-whatsapp, [href*="wa.me"]').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('btn-whatsapp')) {
                e.preventDefault();
                openWhatsApp();
            }
        });
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error logging service
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        }, 0);
    });
}

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}



// Service buttons functionality
function setupServiceButtons() {
    // Get all "En savoir plus" buttons in the services section (exclude hero buttons)
    const serviceButtons = document.querySelectorAll('.services-section .service-card .btn-outline');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on the first form field after scrolling
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input, textarea');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 800);
            }
        });
    });
}

// Function to scroll to sections (used by hero tracking button)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Welcome Chatbot Functionality
function initChatbot() {
    const chatbotContainer = document.getElementById('welcomeChatbot');
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    
    if (!chatbotContainer || !chatbotTrigger) return;
    
    // Show welcome chatbot after 3 seconds
    setTimeout(() => {
        showWelcomeChatbot();
    }, 3000);
    
    // Auto-hide chatbot after 15 seconds if not interacted with
    setTimeout(() => {
        if (chatbotContainer.classList.contains('active')) {
            closeChatbot();
        }
    }, 18000);
}

function showWelcomeChatbot() {
    const chatbotContainer = document.getElementById('welcomeChatbot');
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    
    if (chatbotContainer && chatbotTrigger) {
        chatbotContainer.classList.add('active');
        chatbotTrigger.classList.add('hidden');
    }
}

function openChatbot() {
    const chatbotContainer = document.getElementById('welcomeChatbot');
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    
    if (chatbotContainer && chatbotTrigger) {
        chatbotContainer.classList.add('active');
        chatbotTrigger.classList.add('hidden');
    }
}

function closeChatbot() {
    const chatbotContainer = document.getElementById('welcomeChatbot');
    const chatbotTrigger = document.getElementById('chatbotTrigger');
    
    if (chatbotContainer && chatbotTrigger) {
        chatbotContainer.classList.remove('active');
        chatbotTrigger.classList.remove('hidden');
    }
}

function navigateToServices() {
    closeChatbot();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function navigateToContact() {
    closeChatbot();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Focus on the first form field after scrolling
        setTimeout(() => {
            const firstInput = contactSection.querySelector('input, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }, 800);
    }
}

// Add these to the existing initializeApp function
function setupChatbot() {
    initChatbot();
}

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        validateField,
        showLoading,
        openWhatsApp,
        resetTracking,
        scrollToSection,
        openChatbot,
        closeChatbot,
        navigateToServices,
        navigateToContact
    };
}
