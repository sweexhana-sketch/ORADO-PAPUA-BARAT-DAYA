/* =========================================================
   ORADO PAPUA BARAT DAYA – SCRIPT.JS
   ========================================================= */

// ── Utility ──────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

// ── Hamburger / Mobile Nav ────────────────────────────────
const hamburger  = $('#hamburger');
const mobileNav  = $('#mobile-nav');
const navClose   = $('#nav-close');
const navOverlay = $('#nav-overlay');

function openNav() {
  mobileNav.classList.add('open');
  navOverlay.classList.add('active');
  hamburger.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  mobileNav.classList.remove('open');
  navOverlay.classList.remove('active');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);

// Close nav on link click
$$('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

// ── Header Scroll Effect ──────────────────────────────────
const header = $('#site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Active Nav Link (Scroll Spy) ──────────────────────────
const sections = $$('section[id], main[id]');
const allNavLinks = $$('.desktop-nav-link, .nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      allNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => spyObserver.observe(sec));

// ── Hero Slider ───────────────────────────────────────────
const slides    = $$('.slide');
const dots      = $$('.dot');
const prevBtn   = $('#slider-prev');
const nextBtn   = $('#slider-next');
let current     = 0;
let autoTimer   = null;
const DURATION  = 5500;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() { goToSlide(current + 1); }
function prevSlide() { goToSlide(current - 1); }

function startAuto() {
  stopAuto();
  autoTimer = setInterval(nextSlide, DURATION);
}
function stopAuto() {
  if (autoTimer) clearInterval(autoTimer);
}

nextBtn?.addEventListener('click', () => { nextSlide(); startAuto(); });
prevBtn?.addEventListener('click', () => { prevSlide(); startAuto(); });

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => { goToSlide(i); startAuto(); });
});

// Touch / Swipe
let touchStartX = 0;
const sliderEl = $('#hero-slider');
sliderEl?.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
sliderEl?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) {
    dx < 0 ? nextSlide() : prevSlide();
    startAuto();
  }
}, { passive: true });

startAuto();

// ── Animated Stats Counter ────────────────────────────────
const statNums  = $$('.stat-num');
let statsStarted = false;

function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.round(ease * target).toLocaleString('id-ID');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsStrip = $('.stats-strip');
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsStarted) {
    statsStarted = true;
    statNums.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      animateCounter(el, target);
    });
  }
}, { threshold: 0.4 });
if (statsStrip) statsObserver.observe(statsStrip);

// ── Scroll Fade-Up Animation ──────────────────────────────
$$('.berita-card, .agenda-item, .vm-card, .pengurus-card, .galeri-item, .kontak-item').forEach(el => {
  el.classList.add('fade-up');
});

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  fadeObserver.observe(el);
});

// ── Contact Form ──────────────────────────────────────────
const form     = $('#kontak-form');
const feedback = $('#form-feedback');
const submitBtn = $('#submit-btn');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama  = form.nama.value.trim();
  const email = form.email.value.trim();
  const pesan = form.pesan.value.trim();

  if (!nama || !email || !pesan) {
    feedback.textContent = '⚠ Harap isi semua field yang wajib diisi.';
    feedback.className = 'form-feedback error';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = '⚠ Format email tidak valid.';
    feedback.className = 'form-feedback error';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Mengirim...';
  feedback.textContent = '';

  // Simulate sending
  setTimeout(() => {
    feedback.textContent = '✅ Pesan berhasil dikirim! Kami akan merespons segera.';
    feedback.className = 'form-feedback success';
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Kirim Pesan';
  }, 1200);
});

// ── Back to Top ───────────────────────────────────────────
const backBtn = $('#back-to-top');
window.addEventListener('scroll', () => {
  backBtn?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Keyboard Navigation (Slider) ─────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  { prevSlide(); startAuto(); }
  if (e.key === 'ArrowRight') { nextSlide(); startAuto(); }
});

// ── Console Attribution ───────────────────────────────────
console.log('%cORADO Papua Barat Daya', 'font-size:18px;font-weight:bold;color:#c0392b;');
console.log('%cFederasi Olahraga Domino Nasional', 'font-size:12px;color:#7f8c8d;');
