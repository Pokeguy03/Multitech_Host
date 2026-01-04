// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

    // Smooth scrolling for navigation links
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

    // Call Now button functionality
    const callBtn = document.querySelector('.call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', function() {
            window.location.href = 'tel:+919384250035';
        });
    }

    // Request Service button functionality
    const requestBtn = document.querySelector('.request-btn');
    if (requestBtn) {
        requestBtn.addEventListener('click', function() {
            // You can add form modal or redirect to request form page
            alert('Request Service form will open here');
        });
    }

    // Learn More buttons functionality
    document.querySelectorAll('.learn-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            if (serviceCard) {
                const serviceName = serviceCard.querySelector('h3').textContent;
                alert(`Learn more about ${serviceName}`);
                // You can add navigation to service detail page or open modal
            }
        });
    });

    // Add scroll animation on scroll
    if ('IntersectionObserver' in window) {
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

        // Observe service cards and benefit items
        document.querySelectorAll('.service-card, .benefit-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}); // End of DOMContentLoaded

// WhatsApp redirect function
function openWhatsApp() {
    // Replace with your WhatsApp group link or phone number
    // Option 1: WhatsApp group link (if you have one)
    // window.open('https://chat.whatsapp.com/YOUR_GROUP_LINK', '_blank');
    
    // Option 2: WhatsApp chat with phone number
    const phoneNumber = '919384250035'; // Phone number without + or spaces
    const message = encodeURIComponent('Hello! I would like to book a service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
