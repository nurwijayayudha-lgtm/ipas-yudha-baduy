// 1. Tab Logic
function openTab(evt, tabName) {
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.remove("active");
    b.setAttribute("aria-selected", "false");
  });

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
  evt.currentTarget.setAttribute("aria-selected", "true");
}

// 2. FAQ Data & Render
const faqData = [
  { q: "Bagaimana cara menuju Desa Kanekes?", a: "Dari Stasiun Rangkasbitung, gunakan angkutan ELF jurusan Ciboleger (±2 jam perjalanan), dilanjutkan trekking ±3-4 jam menuju Baduy Dalam." },
  { q: "Apakah perlu pemandu lokal?", a: "Wajib. Pendaftaran dan pemandu wajib dilakukan di gerbang Kaduketug atau Ciboleger untuk keamanan dan kepatuhan adat." },
  { q: "Bisakah berkunjung saat Kawalu?", a: "Selama bulan Kawalu (3 bulan dalam setahun), wilayah Baduy Dalam tertutup total bagi wisatawan luar." },
  { q: "Apa saja larangan utama di Baduy Dalam?", a: "Tidak boleh menggunakan alas kaki, dilarang membawa kamera/elektronik, dilarang memakai pakaian berwarna cerah, dan dilarang menebang pohon sembarangan." }
];

function renderAccordion() {
  const accContainer = document.getElementById('faq-accordion');
  if (!accContainer) return;

  accContainer.innerHTML = '';
  faqData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'accordion-item';
    div.innerHTML = `
      <div class="accordion-header" aria-expanded="false">
        <span>${item.q}</span>
        <span class="icon">+</span>
      </div>
      <div class="accordion-body" aria-hidden="true"><p>${item.a}</p></div>
    `;
    accContainer.appendChild(div);
  });

  // Event Delegation for Accordion
  accContainer.addEventListener('click', function(e) {
    const header = e.target.closest('.accordion-header');
    if (!header) return;

    const body = header.nextElementSibling;
    const isOpen = body.classList.contains('open');

    document.querySelectorAll('.accordion-body').forEach(b => {
      b.classList.remove('open'); b.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.classList.remove('active'); h.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      body.classList.add('open');
      header.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
      body.setAttribute('aria-hidden', 'false');
    }
  });
}

// 3. Scroll Reveal Animation
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderAccordion();
  initScrollReveal();
});