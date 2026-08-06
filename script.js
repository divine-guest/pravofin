// === ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ/СВЕТЛОЙ ТЕМЫ ===
(function() {
    // Находим кнопку переключения темы
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Ищем иконку внутри кнопки
    const themeIcon = themeToggle.querySelector('.theme-icon') || themeToggle;

    // Функция установки темы
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-theme');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
        // Сохраняем выбор пользователя в localStorage
        localStorage.setItem('theme', theme);
    }

    // При загрузке проверяем, что сохранено в localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Обработчик клика по кнопке
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

})();

// === ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// === ПРИВЕТСТВИЕ В КОНСОЛИ ===
console.log('⚖️ ПравоФин — экосистема для юриспруденции, бухгалтерии и финансов');
console.log('🌙 Нажмите на иконку луны/солнца в шапке, чтобы переключить тему.');
