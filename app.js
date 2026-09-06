/**
 * AI Assignments Showcase - Application Logic
 * Features: Dark/Light Mode, PDF Modal, Live Search, Smooth Navigation, Mermaid Rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSearch();
  initPDFModal();
  initMermaid();
});

/* -------------------------------------------------------------------------- */
/* Theme Toggle                                                               */
/* -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('ai_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ai_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(newTheme === 'dark' ? '🌙 เปลี่ยนเป็นธีมมืด (Dark Mode)' : '☀️ เปลี่ยนเป็นธีมสว่าง (Light Mode)');
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggle');
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === 'dark' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  themeToggleBtn.setAttribute('title', theme === 'dark' ? 'สลับเป็นธีมสว่าง' : 'สลับเป็นธีมมืด');
}

/* -------------------------------------------------------------------------- */
/* Navigation & Scrollspy                                                     */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const pillLinks = document.querySelectorAll('.nav-pills .pill-item');
  const cards = document.querySelectorAll('.assignment-card');

  // Smooth scroll
  pillLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          const yOffset = -140; // Offset for fixed navbar + sticky nav
          const y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });

  // IntersectionObserver for active pill highlighting
  if ('IntersectionObserver' in window && cards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          pillLinks.forEach(pill => {
            if (pill.getAttribute('href') === `#${id}`) {
              pill.classList.add('active');
            } else {
              pill.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    });

    cards.forEach(card => observer.observe(card));
  }
}

/* -------------------------------------------------------------------------- */
/* Search & Filter                                                            */
/* -------------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.assignment-card');
  const noResultsMsg = document.getElementById('noResults');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
      const title = (card.querySelector('.card-title')?.innerText || '').toLowerCase();
      const subtitle = (card.querySelector('.card-subtitle')?.innerText || '').toLowerCase();
      const filename = (card.querySelector('.file-name-tag')?.innerText || '').toLowerCase();
      const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => t.innerText.toLowerCase()).join(' ');
      const details = (card.querySelector('.assignment-details')?.innerText || '').toLowerCase();

      const matches = title.includes(query) || 
                      subtitle.includes(query) || 
                      filename.includes(query) || 
                      tags.includes(query) || 
                      details.includes(query);

      if (matches) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
}

/* -------------------------------------------------------------------------- */
/* PDF Modal & Fullscreen View                                                */
/* -------------------------------------------------------------------------- */
function initPDFModal() {
  const modal = document.getElementById('pdfModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');
  const modalOpenExternal = document.getElementById('modalOpenExternal');
  const modalDownload = document.getElementById('modalDownload');

  // Delegate clicks on modal triggers
  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-action="open-modal"]');
    if (openBtn) {
      e.preventDefault();
      const pdfUrl = openBtn.getAttribute('data-pdf-url');
      const pdfTitle = openBtn.getAttribute('data-pdf-title') || 'เอกสาร Assignment';

      if (modal && modalIframe) {
        modalIframe.src = pdfUrl;
        if (modalTitle) modalTitle.innerText = pdfTitle;
        if (modalOpenExternal) modalOpenExternal.href = pdfUrl;
        if (modalDownload) modalDownload.href = pdfUrl;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  // Close modal
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    if (modalIframe) modalIframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Toggle in-page viewer collapse/expand
  document.querySelectorAll('[data-action="toggle-viewer"]').forEach(btn => {
    const targetId = btn.getAttribute('data-target');
    const viewerSection = document.getElementById(targetId);

    // Keep the page compact on first load; users can open each PDF when needed.
    if (viewerSection) {
      viewerSection.style.display = 'none';
      updateViewerToggleButton(btn, true);
    }

    btn.addEventListener('click', () => {
      if (viewerSection) {
        const isHidden = viewerSection.style.display === 'none';
        viewerSection.style.display = isHidden ? 'block' : 'none';
        updateViewerToggleButton(btn, !isHidden);
      }
    });
  });
}

function updateViewerToggleButton(button, isHidden) {
  button.setAttribute('aria-expanded', String(!isHidden));
  button.innerHTML = isHidden
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg> แสดงหน้าต่าง PDF`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg> ซ่อนหน้าต่าง PDF`;
}

/* -------------------------------------------------------------------------- */
/* Mermaid.js Diagram Rendering (Assignment 3 bonus preview)                  */
/* -------------------------------------------------------------------------- */
function initMermaid() {
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
      securityLevel: 'loose'
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Toast Notification Utility                                                 */
/* -------------------------------------------------------------------------- */
function showToast(message, duration = 3000) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.style.display = 'inline-flex';

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.display = 'none';
  }, duration);
}

// Global helper for copying shareable link
window.copySectionLink = function(id) {
  const url = `${window.location.origin}${window.location.pathname}#${id}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast('📋 คัดลอกลิงก์ส่วนนี้เรียบร้อยแล้ว!');
  }).catch(() => {
    showToast('ลิงก์: ' + url);
  });
};
