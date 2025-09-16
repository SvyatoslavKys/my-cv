
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


const informationToCopyPhone = "+48 516 487 234";
const informationToCopyMail = "svyat.ne@gmail.com";
const copyPhone = document.getElementById('copyPhone');
const copyEmail = document.getElementById('copyEmail');
copyPhone.addEventListener('click', () => {
    navigator.clipboard.writeText(informationToCopyPhone)
        .then(() => {
            
        })
        .catch(err => {
            
        });
});
copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText(informationToCopyMail)
        .then(() => {
            
        })
        .catch(err => {
            
        });
});