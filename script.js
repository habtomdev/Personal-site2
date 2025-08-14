// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";

    if (window.scrollY > 100) {
        if (isDarkMode) {
            navbar.style.background = "rgba(15, 23, 42, 0.98)";
            navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
        }
    } else {
        if (isDarkMode) {
            navbar.style.background = "rgba(15, 23, 42, 0.95)";
            navbar.style.boxShadow = "none";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "none";
        }
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(
        ".about-content, .hobbies-grid, .travel-grid, .skills-grid, .projects-grid, .contact-content"
    );

    animateElements.forEach((el) => {
        el.classList.add("fade-in");
        observer.observe(el);
    });
});

// Skill items animation on hover
document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.05)";
    });

    item.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
    });
});

// Project cards animation
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-15px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// Hobby cards animation
document.querySelectorAll(".hobby-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// Travel cards animation
document.querySelectorAll(".travel-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        // Get form data
        const formData = new FormData(this);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        // Simple validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            showNotification("Please fill in all fields", "error");
            return;
        }

        if (!isValidEmail(email)) {
            e.preventDefault();
            showNotification("Please enter a valid email address", "error");
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        // Form will submit to Formspree automatically
        // We'll handle success/error via Formspree's response
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
            type === "success"
                ? "#48bb78"
                : type === "error"
                ? "#f56565"
                : "#4299e1"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = "translateX(0)";
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = "translateX(100%)";
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Add active class styles to CSS
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(style);

// Loading animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Add loading styles
const loadingStyle = document.createElement("style");
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + "+";
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + "+";
        }
    }

    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const statNumbers =
                    entry.target.querySelectorAll(".stat-number");
                statNumbers.forEach((stat) => {
                    const target = parseInt(stat.textContent);
                    animateCounter(stat, target);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

// Observe stats section
const statsSection = document.querySelector(".about-stats");
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Cursor trail effect (optional)
let mouseX = 0;
let mouseY = 0;
let cursorTrail = [];

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Create trail effect
    if (Math.random() > 0.9) {
        createTrailDot(mouseX, mouseY);
    }
});

function createTrailDot(x, y) {
    const dot = document.createElement("div");
    dot.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #667eea;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
    `;

    document.body.appendChild(dot);

    // Animate and remove
    setTimeout(() => {
        dot.style.transform = "scale(0)";
        dot.style.opacity = "0";
        setTimeout(() => dot.remove(), 300);
    }, 100);
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener(
    "scroll",
    throttle(() => {
        // Scroll-based animations
    }, 16)
);

// Initialize tooltips for skill items
document.querySelectorAll(".skill-item").forEach((item) => {
    const skillName = item.querySelector("span").textContent;
    item.setAttribute("title", skillName);
});

// Add some interactive hover effects
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.05)";
    });

    btn.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
    });
});

// Dark Mode Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to set theme
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Update button state
    if (theme === "dark") {
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }

    // Reset navbar background to use CSS variables
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.style.background = "";
        navbar.style.boxShadow = "";
    }
}

// Function to get current theme
function getCurrentTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? "dark" : "light";
}

// Initialize theme
function initializeTheme() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    // Add a subtle animation effect
    document.body.style.transition = "none";
    setTimeout(() => {
        document.body.style.transition =
            "background-color 0.3s ease, color 0.3s ease";
    }, 10);
}

// Event listeners
themeToggle.addEventListener("click", toggleTheme);

// Listen for system theme changes
prefersDarkScheme.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
    }
});

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", initializeTheme);

// Scroll arrow functionality
document.addEventListener("DOMContentLoaded", () => {
    const scrollArrow = document.querySelector(".scroll-arrow");
    if (scrollArrow) {
        scrollArrow.addEventListener("click", () => {
            // Scroll to the skills section (next section after hero)
            const skillsSection = document.querySelector("#about");
            if (skillsSection) {
                skillsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    }
});

// go to top button
// Show button when user scrolls down
window.onscroll = function() {
  const btn = document.getElementById("goTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when button is clicked
document.getElementById("goTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


console.log("My site has loaded succesfuly");
