// === ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ/СВЕТЛОЙ ТЕМЫ ===
(function() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const themeIcon = themeToggle.querySelector('.theme-icon') || themeToggle;

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-theme');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

})();

// === ПЛАВНАЯ ПРОКРУТКА ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('⚖️ ПравоФин — экосистема для юриспруденции, бухгалтерии и финансов');
console.log('🌙 Нажмите на иконку луны/солнца в шапке, чтобы переключить тему.');
