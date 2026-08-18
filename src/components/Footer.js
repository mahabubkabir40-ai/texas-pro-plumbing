import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';

export function renderFooter() {
  return `
    <footer class="plumbzo-giant-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Bio -->
          <div class="footer-col">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <div class="brand-icon-box" style="background: #ffffff; color: var(--color-brand-orange); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div>
                <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 900; color: #ffffff; line-height: 1.1; letter-spacing: -0.02em;">Texas Pro Plumbing</div>
              </div>
            </div>
            
            <p style="font-size: 0.95rem; line-height: 1.65; color: #ffffff; opacity: 0.92; margin-bottom: 0;">
              Connecting Texas homeowners and commercial property managers with certified master plumbers. 24/7 emergency dispatch across 10 strategic growth hubs.
            </p>
          </div>

          <!-- Col 2: Services -->
          <div class="footer-col">
            <h3 class="footer-col-title">Plumbing Services</h3>
            <ul class="footer-links">
              ${servicesData.map(s => `
                <li><a href="${s.path}" class="footer-link" data-link>${s.shortTitle}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Col 3: Service Areas -->
          <div class="footer-col">
            <h3 class="footer-col-title">Texas Service Areas</h3>
            <ul class="footer-links" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1rem;">
              ${citiesData.map(c => `
                <li><a href="${c.path}" class="footer-link" data-link>${c.name}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Col 4: Quick Links -->
          <div class="footer-col">
            <h3 class="footer-col-title">Quick Links</h3>
            <ul class="footer-links" style="margin-bottom: 1.25rem;">
              <li><a href="/about-us/" class="footer-link" data-link>About Us</a></li>
              <li><a href="/contact-us/" class="footer-link" data-link>Contact & Dispatch</a></li>
              <li><a href="/privacy-policy/" class="footer-link" data-link>Privacy Policy</a></li>
              <li><a href="/terms-and-conditions/" class="footer-link" data-link>Terms of Service</a></li>
            </ul>
            
            <div>
              <a href="tel:8005557586" class="btn btn-secondary btn-lg" style="background: #ffffff; color: var(--color-brand-orange); border: 2px solid #ffffff; font-weight: 800; width: 100%; box-shadow: 0 10px 25px rgba(0,0,0,0.15); text-align: center;">
                (800) 555-7586
              </a>
            </div>
          </div>
        </div>

        <!-- Giant Watermark Logo -->
        <div class="giant-watermark-text" aria-hidden="true">
          TEXAS PRO PLUMBING
        </div>

        <!-- Bottom Copyright -->
        <div class="footer-bottom" style="justify-content: center; text-align: center;">
          <div>© ${new Date().getFullYear()} Texas Pro Plumbing. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  `;
}
