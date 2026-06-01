const searchInput = document.querySelector('#pubSearch');
const yearSelect = document.querySelector('#pubYear');
const pubItems = Array.from(document.querySelectorAll('.pub-item'));

function filterPublications() {
  if (!searchInput || !yearSelect) return;
  const query = searchInput.value.trim().toLowerCase();
  const year = yearSelect.value;

  pubItems.forEach((item) => {
    const text = item.innerText.toLowerCase();
    const itemYear = item.dataset.year || '';
    const matchesQuery = !query || text.includes(query);
    const matchesYear = !year || itemYear === year;
    item.style.display = matchesQuery && matchesYear ? '' : 'none';
  });
}

if (searchInput && yearSelect) {
  searchInput.addEventListener('input', filterPublications);
  yearSelect.addEventListener('change', filterPublications);
}

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
