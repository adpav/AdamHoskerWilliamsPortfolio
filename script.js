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

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

document.onload = retrieveTheme();

// animate logo
document.addEventListener('DOMContentLoaded', function() {
    const returnToTop = document.getElementById('return-to-top');

    returnToTop.addEventListener('click', function(event) {
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
