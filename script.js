// script.js
document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById('colorPicker');
    const themeColorMeta = document.getElementById('themeColorMeta');
    const favicon = document.getElementById('favicon');

    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;
        
        // Change the background color of the webpage
        document.body.style.backgroundColor = selectedColor;
        
        // Change the theme color meta tag content
        themeColorMeta.setAttribute('content', selectedColor);
        
        // Change the favicon color
        favicon.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='${selectedColor.replace("#", "%23")}' d='M0 0h16v16H0z'/%3E%3C/svg%3E`;
    });
});
