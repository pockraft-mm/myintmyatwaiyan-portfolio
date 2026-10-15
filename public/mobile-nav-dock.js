const root = document.getElementById('root');

if (root) {
  const icons = {
    work: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>',
    about: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    services: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>',
    contact: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  };

  const attachDock = () => {
    const sourceNav = root.querySelector('.site-header .nav');
    if (!sourceNav || document.querySelector('.mobile-nav-dock')) return;

    const dock = document.createElement('aside');
    dock.className = 'mobile-nav-dock';
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav-links';
    nav.setAttribute('aria-label', 'Mobile navigation');

    sourceNav.querySelectorAll('a').forEach((sourceLink) => {
      const link = sourceLink.cloneNode(false);
      const label = sourceLink.textContent.trim();
      const icon = icons[label.toLowerCase()] ?? icons.work;
      link.className = 'mobile-nav-item';
      link.setAttribute('aria-label', label);
      link.innerHTML = `${icon}<span>${label}</span>`;
      nav.append(link);
    });
    dock.append(nav);

    let pointerActivation = false;
    let expandForTouch = false;
    const setOpen = (open) => dock.classList.toggle('is-open', open);

    nav.addEventListener('pointerdown', (event) => {
      pointerActivation = true;
      expandForTouch = event.pointerType === 'touch' && !dock.classList.contains('is-open');
      if (expandForTouch) setOpen(true);
    });
    nav.addEventListener('pointerup', () => setTimeout(() => { pointerActivation = false; }, 0));
    nav.addEventListener('pointercancel', () => {
      pointerActivation = false;
      expandForTouch = false;
    });
    nav.addEventListener('click', (event) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!link) return;
      if (expandForTouch) {
        event.preventDefault();
        expandForTouch = false;
        return;
      }
      setOpen(false);
    });
    dock.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'touch') setOpen(true);
    });
    dock.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'touch' && !dock.contains(document.activeElement)) setOpen(false);
    });
    dock.addEventListener('focusin', () => {
      if (!pointerActivation) setOpen(true);
    });
    dock.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!dock.contains(document.activeElement)) setOpen(false);
      });
    });
    document.addEventListener('pointerdown', (event) => {
      if (!dock.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });

    document.body.append(dock);
    observer.disconnect();
  };

  const observer = new MutationObserver(attachDock);
  observer.observe(root, { childList: true, subtree: true });
  attachDock();
}
