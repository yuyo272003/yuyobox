// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle de tema claro/oscuro
const root = document.documentElement;
const btn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) {
    root.setAttribute('data-theme', saved);
    btn.setAttribute('aria-pressed', String(saved === 'dark'));
}
btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.setAttribute('aria-pressed', String(next === 'dark'));
});

// Filtros de la galería
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.gallery figure');
chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(b => b.setAttribute('aria-pressed', 'false'));
    ch.setAttribute('aria-pressed', 'true');
    const f = ch.dataset.filter;
    items.forEach(fig => {
        const show = f === 'all' || fig.dataset.tags.includes(f);
        fig.style.display = show ? '' : 'none';
    });
}));

