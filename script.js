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
