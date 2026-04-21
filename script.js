// 1. Tab Logic
function openTab(evt, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));

    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 2. Data FAQ/Logistik untuk Efisiensi Konten
const faqData = [
    { q: "Bagaimana cara menuju Desa Kanekes?", a: "Dari Stasiun Rangkasbitung, gunakan angkutan ELF jurusan Ciboleger (±2 jam perjalanan)." },
    { q: "Apakah perlu pemandu lokal?", a: "Sangat disarankan untuk kenyamanan navigasi dan pemahaman etika adat yang mendalam." },
    { q: "Bisakah berkunjung saat Kawalu?", a: "Selama bulan Kawalu (3 bulan dalam setahun), wilayah Baduy Dalam tertutup bagi wisatawan." }
];

function renderAccordion() {
    const accContainer = document.getElementById('faq-accordion');
    faqData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'accordion-item';
        div.innerHTML = `
            <div class="accordion-header" onclick="this.nextElementSibling.classList.toggle('active')">
                <span>${item.q}</span>
                <span>+</span>
            </div>
            <div class="tab-content" style="padding-top:15px; color:#aaa;">
                <p>${item.a}</p>
            </div>
        `;
        accContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderAccordion();
});