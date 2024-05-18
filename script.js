// script.js
document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById('colorPicker');
    const themeColorMeta = document.getElementById('themeColorMeta');
    
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;
        
        // Change the background color of the webpage
        document.body.style.backgroundColor = selectedColor;
        
        // Change the theme color meta tag content
        themeColorMeta.setAttribute('content', selectedColor);
    });
});
