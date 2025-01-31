
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    themeToggle.textContent = document.body.classList.contains('night-mode') ? '☀️ Day Mode' : '🌙 Night Mode';
});


const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    const isPolish = document.body.classList.toggle('polish-mode');
    languageToggle.textContent = isPolish ? '🇬🇧 English' : '🇵🇱 Polish';
    updateTextContent(isPolish ? 'pl' : 'en');
});

function updateTextContent(lang) {
    document.querySelectorAll('[data-en], [data-pl]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
}

document.getElementById('print-button').addEventListener('click', () => {
    window.print(); 
});