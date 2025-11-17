(function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    const grid = document.getElementById('portfolioGrid');
    if (grid) {
        const buttons = document.querySelectorAll('[data-filter]');
        buttons.forEach(btn => btn.addEventListener('click', e => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-filter');
            const items = grid.querySelectorAll('.work');
            items.forEach(it => {
                if (cat === 'all' || it.dataset.cat === cat) { it.style.display = 'block' } else { it.style.display = 'none' }
            })
        }))
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.elements['name'].value.trim();
            const email = form.elements['email'].value.trim();
            const message = form.elements['message'].value.trim();
            const feedback = document.getElementById('formMessage');
            if (!name || !email || !message) {
                feedback.textContent = 'Por favor, preencha os campos obrigatórios.';
                feedback.style.color = 'var(--accent)';
                return;
            }
            feedback.style.color = '#8de39a';
            feedback.textContent = 'Mensagem enviada com sucesso — agradeço o contato! (simulação)';
            form.reset();
        })
    }

    const y = new Date().getFullYear();
    ['year', 'year2', 'year3', 'year4', 'year5'].forEach(id => {
        const el = document.getElementById(id); if (el) el.textContent = y;
    });


})();