document.addEventListener('DOMContentLoaded', function () {
    var btnJa = document.getElementById('lang-ja');
    var btnEn = document.getElementById('lang-en');

    function setLang(lang) {
        var els = document.querySelectorAll('[data-ja][data-en]');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            el.textContent = el.getAttribute('data-' + lang);
        }

        if (lang === 'ja') {
            btnJa.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'ja';
        } else {
            btnEn.classList.add('active');
            btnJa.classList.remove('active');
            document.documentElement.lang = 'en';
        }

        try {
            localStorage.setItem('moriyatee-lang', lang);
        } catch (e) {}
    }

    btnJa.addEventListener('click', function () { setLang('ja'); });
    btnEn.addEventListener('click', function () { setLang('en'); });

    var saved = null;
    try { saved = localStorage.getItem('moriyatee-lang'); } catch (e) {}
    if (saved === 'en') {
        setLang('en');
    }
});
