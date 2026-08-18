import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';

export function renderHeader(currentPath) {
  const isServiceActive = currentPath.startsWith('/services');
  const isLocationsActive = currentPath.startsWith('/locations');

  return `
    <!-- Floating Pill Header -->
    <div class="header-wrapper">
      <header class="main-header" role="banner">
        <div class="header-inner">
          <!-- Brand Logo -->
          <a href="/" class="brand-logo" data-link id="brand-logo-link">
            <div class="brand-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div class="brand-text">
              <div class="brand-name">Texas Pro <span>Plumbing</span></div>
            </div>
          </a>

          <!-- Center Desktop Navigation -->
          <nav class="desktop-nav" aria-label="Main Navigation">
            <a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}" data-link>Home</a>
            
            <!-- Services Dropdown -->
            <div class="nav-item-has-dropdown">
              <a href="/services/" class="nav-link ${isServiceActive ? 'active' : ''}" data-link>
                Services ▾
              </a>
              <div class="nav-dropdown">
                ${servicesData.map(s => `
                  <a href="${s.path}" class="dropdown-link" data-link>
                    ${s.shortTitle}
                  </a>
                `).join('')}
                <div style="border-top: 1px solid var(--border-light); margin-top: 0.35rem; padding-top: 0.35rem;">
                  <a href="/services/" class="dropdown-link" style="color: var(--color-brand-orange); font-weight: 700;" data-link>
                    View All 8 Services →
                  </a>
                </div>
              </div>
            </div>

            <!-- Locations Dropdown -->
            <div class="nav-item-has-dropdown">
              <a href="/locations/" class="nav-link ${isLocationsActive ? 'active' : ''}" data-link>
                Service Areas ▾
              </a>
              <div class="nav-dropdown" style="width: 320px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25rem;">
                  ${citiesData.map(c => `
                    <a href="${c.path}" class="dropdown-link" style="padding: 0.45rem 0.65rem; font-size: 0.85rem;" data-link>
                      📍 ${c.name}
                    </a>
                  `).join('')}
                </div>
                <div style="border-top: 1px solid var(--border-light); margin-top: 0.5rem; padding-top: 0.35rem;">
                  <a href="/locations/" class="dropdown-link" style="color: var(--color-brand-orange); font-weight: 700;" data-link>
                    View All 10 Texas Hubs →
                  </a>
                </div>
              </div>
            </div>

            <a href="/about-us/" class="nav-link ${currentPath === '/about-us/' ? 'active' : ''}" data-link>About</a>
            <a href="/contact-us/" class="nav-link ${currentPath === '/contact-us/' ? 'active' : ''}" data-link>Contact</a>
          </nav>

          <!-- Right Action CTA (Only Number) -->
          <div class="header-actions">
            <a href="tel:8005557586" class="btn btn-primary btn-sm" id="header-phone-cta" style="font-size: 0.95rem; font-weight: 800; padding: 0.65rem 1.45rem; border-radius: var(--radius-pill);">
              (800) 555-7586
            </a>

            <button type="button" class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle Mobile Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
    <aside class="mobile-drawer" id="mobile-drawer" aria-label="Mobile Navigation">
      <div class="drawer-header">
        <div class="brand-name" style="font-size: 1.2rem;">Texas Pro <span>Plumbing</span></div>
        <button type="button" class="drawer-close-btn" id="drawer-close-btn" aria-label="Close Menu">✕</button>
      </div>
      <nav class="drawer-links">
        <a href="/" class="drawer-link" data-link>Home</a>
        <a href="/services/" class="drawer-link" data-link>All Plumbing Services</a>
        <div style="padding-left: 0.75rem; display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.5rem;">
          ${servicesData.slice(0, 5).map(s => `
            <a href="${s.path}" style="font-size: 0.88rem; color: var(--text-muted);" data-link>• ${s.shortTitle}</a>
          `).join('')}
        </div>
        <a href="/locations/" class="drawer-link" data-link>Texas Service Areas</a>
        <div style="padding-left: 0.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem; margin-bottom: 0.5rem;">
          ${citiesData.map(c => `
            <a href="${c.path}" style="font-size: 0.85rem; color: var(--text-muted);" data-link>📍 ${c.name}</a>
          `).join('')}
        </div>
        <a href="/about-us/" class="drawer-link" data-link>About Us</a>
        <a href="/contact-us/" class="drawer-link" data-link>24/7 Emergency Dispatch</a>
      </nav>
      <div style="margin-top: auto; padding-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <a href="tel:8005557586" class="btn btn-primary btn-lg" style="width: 100%; text-align: center;">
          Call (800) 555-7586
        </a>
        <button type="button" class="btn btn-dark open-lead-modal" style="width: 100%;">
          Request Free Estimate
        </button>
      </div>
    </aside>
  `;
}
