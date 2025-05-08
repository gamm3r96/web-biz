// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for contacting us!');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

// Dynamic Animations (Fade-In on Scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
});

// Observe all elements with the class "animate"
document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add CSS Classes Dynamically
document.querySelectorAll('.step, .plan, .hero-content').forEach(el => el.classList.add('animate'));

// Dynamic price 
document.getElementById('monthly').addEventListener('click', () => {
    document.querySelector('.price').textContent = '$10/month';
});

document.getElementById('one-time').addEventListener('click', () => {
    document.querySelector('.price').textContent = '$5 per delivery';
});


// Update hero background based on dark mode
const hero = document.querySelector('.hero');

function updateHeroBackground() {
    if (document.body.classList.contains('dark-mode')) {
        hero.style.backgroundImage = "url('background-3d-dark.jpg')";
    } else {
        hero.style.backgroundImage = "url('background-3d.jpg')";
    }
}

// Load dark mode preference
const isDark = localStorage.getItem('dark-mode') === 'true';
if (isDark) document.body.classList.add('dark-mode');
updateHeroBackground();

// Add event listener
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    updateHeroBackground();
});
