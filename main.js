// ===== DESA RANDULANANG - main.js =====

// 1. Highlight nav aktif berdasarkan halaman saat ini
function setActiveNav() {
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    const linkFile = a.getAttribute("href");
    if (linkFile === currentFile) a.classList.add("active");
  });
}

// 2. Pesan selamat datang dinamis (Home)
function welcomeMessage() {
  const label = document.querySelector(".hero-text .label");
  if (!label) return;
  const jam = new Date().getHours();
  let sapa = "Selamat Datang";
  if (jam >= 5 && jam < 12)       sapa = "Selamat Pagi";
  else if (jam >= 12 && jam < 15) sapa = "Selamat Siang";
  else if (jam >= 15 && jam < 18) sapa = "Selamat Sore";
  else                             sapa = "Selamat Malam";
  label.textContent = sapa + ", Selamat Datang di";
}

// 3. Konfirmasi unduhan (Unduhan)
function initDownload() {
  document.querySelectorAll(".btn-dl").forEach(btn => {
    btn.addEventListener("click", function () {
      const title = this.closest(".unduh-item").querySelector(".title").textContent;
      setTimeout(() => alert("✅ Mengunduh: " + title), 100);
    });
  });
}

// 4. Animasi fade-in elemen kartu
function fadeInContent() {
  const targets = document.querySelectorAll(".card, .unduh-item, .jabatan, .galeri-item");
  targets.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 50);
  });
}

// 5. Tahun otomatis di footer
function setFooterYear() {
  document.querySelectorAll("footer p").forEach(el => {
    el.innerHTML = el.innerHTML.replace(/\d{4}/, new Date().getFullYear());
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  welcomeMessage();
  initDownload();
  fadeInContent();
  setFooterYear();
});