# Hab-Dev Portfolio Website

## I prepared this readme using Ai

A sleek and modern portfolio website designed for web developers to showcase their work in the best way possible. Features minimal design, smooth animations, and responsive layout.

## 🚀 Features

-   **Modern Design**: Clean, minimal aesthetic with beautiful gradients and typography
-   **Smooth Animations**: CSS animations and JavaScript interactions for engaging user experience
-   **Responsive Layout**: Fully responsive design that works on all devices
-   **Interactive Elements**: Hover effects, scroll animations, and dynamic content
-   **Contact Form**: Functional contact form with validation and notifications
-   **Mobile Navigation**: Hamburger menu for mobile devices
-   **Dark Mode**: Beautiful dark/light theme toggle with system preference detection
-   **Performance Optimized**: Efficient code with smooth scrolling and optimized animations

## 📁 File Structure

```
Personal-site2/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

Update the following sections in `index.html`:

#### Hero Section

```html
<span class="name">Your Name</span>
<span class="title">Your Title</span>
<p class="hero-description">Your description here</p>
```

#### About Section

```html
<p>Your personal description...</p>
<div class="stat">
    <span class="stat-number">Your Number</span>
    <span class="stat-label">Your Label</span>
</div>
```

#### Contact Information

```html
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your Location</span>
```

### 2. Skills & Technologies

Modify the skills section in `index.html`:

```html
<div class="skill-item">
    <i class="fab fa-your-icon"></i>
    <span>Your Skill</span>
</div>
```

Available Font Awesome icons: https://fontawesome.com/icons

### 3. Projects

Update the projects section with your own work:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-live-link" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-link" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <!-- Add your project image here -->
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

### 4. Social Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="your-github" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-linkedin" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add more social links as needed -->
</div>
```

### 5. Color Scheme

The current color scheme uses a purple gradient. To change it, update these CSS variables in `styles.css`:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* You can replace with your preferred colors */
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
```

### 6. Fonts

The website uses Inter font from Google Fonts. To change it:

1. Update the Google Fonts link in `index.html`:

```html
<link
    href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
/>
```

2. Update the font-family in `styles.css`:

```css
body {
    font-family: "YourFont", sans-serif;
}
```

### 7. Dark Mode Customization

The website includes a beautiful dark mode toggle. To customize the dark theme colors:

1. Update the dark theme variables in `styles.css`:

```css
[data-theme="dark"] {
    --bg-primary: #your-dark-bg;
    --bg-secondary: #your-dark-secondary;
    --text-primary: #your-dark-text;
    /* ... other variables */
}
```

2. The theme toggle automatically:
    - Remembers user preference in localStorage
    - Detects system theme preference
    - Provides smooth transitions between themes

## 🛠️ Technical Features

### CSS Features

-   CSS Grid and Flexbox for responsive layouts
-   CSS animations and transitions
-   Custom properties for easy theming
-   Mobile-first responsive design
-   Smooth scrolling behavior

### JavaScript Features

-   Intersection Observer for scroll animations
-   Form validation and submission handling
-   Mobile navigation toggle
-   Active navigation highlighting
-   Counter animations for statistics
-   Notification system
-   Performance optimizations

### Browser Support

-   Modern browsers (Chrome, Firefox, Safari, Edge)
-   Mobile browsers (iOS Safari, Chrome Mobile)
-   Graceful degradation for older browsers

## 📱 Responsive Breakpoints

-   **Desktop**: 1200px and above
-   **Tablet**: 768px - 1199px
-   **Mobile**: Below 768px
-   **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **Clone or download** the files to your local machine
2. **Customize** the content as described above
3. **Test** the website locally by opening `index.html` in your browser
4. **Deploy** to your preferred hosting service

## 🌐 Deployment Options

### GitHub Pages

1. Create a new repository on GitHub
2. Upload your files
3. Go to Settings > Pages
4. Select source branch and save

### Netlify

1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Vercel

1. Connect your GitHub repository
2. Vercel will automatically deploy your site

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional:

1. **EmailJS** (Recommended for beginners):

    - Sign up at emailjs.com
    - Configure your email template
    - Add EmailJS script and update the form handler

2. **Netlify Forms**:

    - Add `netlify` attribute to the form
    - Deploy to Netlify
    - Forms will be handled automatically

3. **Custom Backend**:
    - Create your own backend API
    - Update the form submission in `script.js`

## 🎯 Performance Tips

-   Optimize images before adding them
-   Compress CSS and JavaScript for production
-   Use a CDN for external resources
-   Enable gzip compression on your server
-   Consider lazy loading for images

## 🔧 Troubleshooting

### Common Issues

1. **Font Awesome icons not showing**:

    - Check your internet connection
    - Verify the CDN link is working

2. **Animations not working**:

    - Ensure JavaScript is enabled
    - Check browser console for errors

3. **Mobile menu not working**:
    - Verify the hamburger button exists
    - Check for JavaScript errors

### Browser Compatibility

-   Test in multiple browsers
-   Use browser dev tools to check for issues
-   Consider polyfills for older browsers if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing or have questions:

-   Check the browser console for errors
-   Review the code comments for guidance
-   Test in different browsers and devices

---

**Built with ❤️ and lots of ☕**

Happy coding! 🚀
