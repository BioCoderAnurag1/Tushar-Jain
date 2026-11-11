/**
 * Dr. Tushar Jain - Personal Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initMetricsCounter();
  initPublications();
  initContactForm();
  initVCardDownload();
  initModals();
  initNavSpy();
});

/* --------------------------------------------------------------------------
   Theme Management (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'dark'); // default dark for tech aesthetic
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (!icon) return;
  if (theme === 'light') {
    // Show Moon icon for switching to dark
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    // Show Sun icon for switching to light
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  }
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const links = mobileNav ? mobileNav.querySelectorAll('.nav-link') : [];

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !hamburger.contains(e.target) && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Animated Number Counters
   -------------------------------------------------------------------------- */
function initMetricsCounter() {
  const counterElements = document.querySelectorAll('.metric-value');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, prefix, suffix);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById('metrics');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

function animateCounter(el, target, prefix, suffix) {
  let start = 0;
  const duration = 1600;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo
    const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(easeOut * target);
    el.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = `${prefix}${target}${suffix}`;
    }
  }
  requestAnimationFrame(update);
}

/* --------------------------------------------------------------------------
   Publications Filtering, Searching & Rendering
   -------------------------------------------------------------------------- */
let activeFilter = 'all';
let searchQuery = '';

function initPublications() {
  const pubList = document.getElementById('publicationsList');
  if (!pubList) return;

  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('pubSearch');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderPublications();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPublications();
    });
  }

  renderPublications();
}

function renderPublications() {
  const pubList = document.getElementById('publicationsList');
  const countEl = document.getElementById('pubResultsCount');
  if (!pubList) return;

  const allItems = PORTFOLIO_DATA.publications || [];

  const filtered = allItems.filter(item => {
    // Category or Type Filter
    let matchesCategory = true;
    if (activeFilter === 'all') {
      matchesCategory = true;
    } else if (activeFilter === 'journal') {
      matchesCategory = item.type === 'journal';
    } else if (activeFilter === 'conference') {
      matchesCategory = item.type === 'conference';
    } else if (activeFilter === 'scopus') {
      matchesCategory = item.indexing && item.indexing.some(idx => idx.toLowerCase().includes('scopus') || idx.toLowerCase().includes('science'));
    } else if (activeFilter === 'vision') {
      matchesCategory = item.category === 'vision';
    } else if (activeFilter === 'industry4') {
      matchesCategory = item.category === 'industry4';
    }

    // Search Query Matching
    let matchesSearch = true;
    if (searchQuery) {
      const haystack = `${item.title} ${item.authors} ${item.venue} ${item.year} ${(item.indexing || []).join(' ')}`.toLowerCase();
      matchesSearch = haystack.includes(searchQuery);
    }

    return matchesCategory && matchesSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${allItems.length} publications`;
  }

  if (filtered.length === 0) {
    pubList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 600;">No publications found</p>
        <p style="font-size: 0.9rem;">Try adjusting your search query or switching filters.</p>
      </div>
    `;
    return;
  }

  pubList.innerHTML = filtered.map(item => createPubCardHTML(item)).join('');

  // Attach event listeners to copy buttons
  pubList.querySelectorAll('.btn-copy-cite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      copyCitation(id);
    });
  });
}

function createPubCardHTML(item) {
  // Highlight Dr. Tushar Jain's name
  const highlightedAuthors = item.authors.replace(
    /(Tushar\s+Jain)/gi,
    '<strong>$1</strong>'
  );

  // Badge determination
  const badgesHtml = (item.indexing || []).map(idx => {
    let cls = 'badge-springer';
    if (idx.toLowerCase().includes('scopus')) cls = 'badge-scopus';
    if (idx.toLowerCase().includes('web of science') || idx.toLowerCase().includes('esci') || idx.toLowerCase().includes('sci')) cls = 'badge-wos';
    if (item.type === 'conference') cls = 'badge-conf';
    return `<span class="pub-badge ${cls}">${idx}</span>`;
  }).join('');

  const typeBadge = item.type === 'journal' 
    ? `<span class="pub-badge" style="background: rgba(16,185,129,0.12); color: #10b981; border: 1px solid rgba(16,185,129,0.25);">Journal Paper</span>`
    : `<span class="pub-badge" style="background: rgba(99,102,241,0.12); color: #818cf8; border: 1px solid rgba(99,102,241,0.25);">Conference Paper</span>`;

  const doiLink = item.doi ? `
    <a href="${item.doi}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" style="padding: 0.25rem 0.65rem; font-size: 0.775rem;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      View DOI
    </a>
  ` : '';

  return `
    <article class="pub-card" id="pub-${item.id}">
      <div class="pub-card-header">
        <h3 class="pub-title">${item.title}</h3>
        <div class="pub-badges">
          ${typeBadge}
          ${badgesHtml}
        </div>
      </div>
      <p class="pub-authors">${highlightedAuthors}</p>
      <p class="pub-venue">${item.venue}</p>
      <div class="pub-footer">
        <span class="pub-year">Year: <strong>${item.year}</strong></span>
        <div class="pub-actions">
          ${doiLink}
          <button class="btn btn-sm btn-secondary btn-copy-cite" data-id="${item.id}" title="Copy Citation">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Citation
          </button>
        </div>
      </div>
    </article>
  `;
}

function copyCitation(id) {
  const item = PORTFOLIO_DATA.publications.find(p => p.id === id);
  if (!item) return;

  const citation = `${item.authors} (${item.year}). "${item.title}." ${item.venue}.${item.doi ? ' DOI: ' + item.doi : ''}`;
  navigator.clipboard.writeText(citation).then(() => {
    showToast('Citation copied to clipboard!');
  }).catch(() => {
    showToast('Citation ready');
  });
}

/* --------------------------------------------------------------------------
   Contact Form Simulation & Direct Mail
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    const mailtoUrl = `mailto:tujain04@gmail.com?subject=${encodeURIComponent('[Portfolio Inquiry] ' + (subject || 'Collaboration'))}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    showToast('Opening mail client... Thank you!');
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   vCard (.vcf) Generator
   -------------------------------------------------------------------------- */
function initVCardDownload() {
  const downloadBtns = document.querySelectorAll('.btn-download-vcard');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      generateVCard();
    });
  });
}

function generateVCard() {
  const p = PORTFOLIO_DATA.profile;
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Jain;Tushar;;Dr.;`,
    `FN:Dr. Tushar Jain`,
    `ORG:Infosys Ltd`,
    `TITLE:Senior Tech Specialist & AI/Computer Vision Researcher`,
    `TEL;TYPE=CELL,VOICE:${p.phone}`,
    `EMAIL;TYPE=PREF,INTERNET:${p.emailPrimary}`,
    `EMAIL;TYPE=INTERNET:${p.emailSecondary}`,
    `ADR;TYPE=WORK:;;Greater Noida;UP;201310;India`,
    `NOTE:Ph.D. Computer Vision (NIT Kurukshetra) | GATE AIR 999 | 22+ Years Exp`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Dr_Tushar_Jain.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded Dr. Tushar Jain\'s contact card (vCard)!');
}

/* --------------------------------------------------------------------------
   Modal Controller (Image zoom & spotlights)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (!modalOverlay) return;

  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const type = trigger.getAttribute('data-modal-target');
      if (type === 'research-preview') {
        modalTitle.textContent = 'Research Showcase: Computer Vision & Computational Modeling';
        modalBody.innerHTML = `
          <div style="text-align: center;">
            <img src="assets/research-preview.jpg" alt="Research Diagram" style="max-height: 500px; margin: 0 auto; border-radius: 8px; border: 1px solid var(--border-subtle);" />
            <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem; text-align: left;">
              Interactive illustration of computational modeling, molecular docking, and 3D geometric surface recognition frameworks applied in advanced multi-domain research.
            </p>
          </div>
        `;
        modalOverlay.classList.add('active');
      } else if (type === 'profile-zoom') {
        modalTitle.textContent = 'Dr. Tushar Jain';
        modalBody.innerHTML = `
          <div style="text-align: center;">
            <img src="assets/profile.jpg" alt="Dr. Tushar Jain Portrait" style="max-height: 520px; margin: 0 auto; border-radius: 12px;" />
            <p style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.95rem;">
              Senior Tech Specialist at Infosys Ltd | Ph.D. NIT Kurukshetra
            </p>
          </div>
        `;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Scrollspy & Active Navigation Link
   -------------------------------------------------------------------------- */
function initNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
