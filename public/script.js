// Get the current year
const currentYear = new Date().getFullYear();

// Find the HTML element with the id 'current-year'
const yearElement = document.getElementById('current-year');

// Set the text content of the element to the current year
yearElement.textContent = currentYear;

const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function(theme) {
    localStorage.setItem('theme', theme);
};

const applyTheme = function(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
};

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    if (activeTheme) {
        applyTheme(activeTheme);
    }
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
        applyTheme(themeOption.id);
    });
});

document.addEventListener('DOMContentLoaded', retrieveTheme);

// GSAP text animation - loop through design, build, shape
document.addEventListener('DOMContentLoaded', function() {
    const headingSpan = document.querySelector('.banner h1 .text-outline');
    
    if (headingSpan) {
        gsap.registerPlugin(TextPlugin);

        gsap.set(headingSpan, { text: 'design' });

        // Explicit sequence avoids timing overlaps and guarantees all words render.
        gsap.timeline({ repeat: -1 })
            .to({}, { duration: 2 })
            .to(headingSpan, { duration: 0.6, text: 'build' })
            .to({}, { duration: 2 })
            .to(headingSpan, { duration: 0.6, text: 'shape' })
            .to({}, { duration: 2 })
            .to(headingSpan, { duration: 0.6, text: 'design' });
    }
});

// animate logo
document.addEventListener('DOMContentLoaded', function() {
    const returnToTop = document.getElementById('return-to-top');

    returnToTop.addEventListener('click', function(event) {
        if (returnToTop.getAttribute('href') !== '#') return;
        event.preventDefault();

        // Add the rotate class to animate the rotation
        returnToTop.classList.add('rotate');

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Remove the rotate class after the scroll animation is complete
        window.addEventListener('scroll', function() {
            if (window.scrollY === 0) {
                returnToTop.classList.remove('rotate');
            }
        });
    });
});

window.onload = function() {
    document.getElementById('return-to-top').classList.add('rotate');
};

document.querySelectorAll('[loading="lazy"]').forEach(element => {
    const animateIn = () => {
      element.style.opacity = 1;
    };
  
    if (element.complete) {
      animateIn();
    } else {
      element.addEventListener('load', animateIn);
    }
  });
