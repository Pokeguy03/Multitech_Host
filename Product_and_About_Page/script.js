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

    // Call Now button functionality
    const callBtn = document.querySelector('.call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', function() {
            window.location.href = 'tel:+919384250035';
        });
    }
});

function handleBuy(productName) {
    alert("Thank you for your interest in " + productName + "! Redirecting to checkout...");
}

// WhatsApp redirect function
function openWhatsApp() {
    const phoneNumber = '919384250035'; // Phone number without + or spaces
    const message = encodeURIComponent('Hello! I would like to book a service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Log a message to verify the file is connected
console.log("Balaji Multitech Website Loaded Successfully");