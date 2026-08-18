import { pagesContent } from '../data/pagesData.js';
import { citiesData } from '../data/citiesData.js';
import { servicesData } from '../data/servicesData.js';

export function renderContactPage() {
  const page = pagesContent['G-005'] || {};

  return `
    <!-- 1. CONTACT & DISPATCH SPLIT HERO -->
    <section class="hero-section" aria-label="Contact Texas Pro Plumbing Hero">
      <div class="container">
        <div class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="/" data-link>Home</a></li>
            <li class="breadcrumb-item active">Contact & 24/7 Dispatch</li>
          </ul>
        </div>

        <div class="hero-grid" style="align-items: flex-start; gap: 3.5rem;">
          <!-- Left Column: Contact Channels & Credentials -->
          <div class="hero-content">
            <div class="hero-badge-row">
              <span class="plumbzo-pill orange">
                <span class="live-dot" aria-hidden="true"></span> ⚡ 24/7 Statewide Emergency Dispatch
              </span>
              <span class="plumbzo-pill">
                TSBPE Master #M-41982
              </span>
            </div>

            <h1 class="hero-headline" style="font-size: clamp(2.1rem, 3.8vw, 3.2rem);">
              Contact Texas Pro Plumbing | <span>24/7 Emergency Dispatch & Free Quotes</span>
            </h1>

            <p style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-brand-orange); margin-bottom: 0.85rem;">
              Get in Touch with Our Texas Plumbing Team
            </p>

            <p class="hero-subhead" style="margin-bottom: 1.75rem;">
              Whether you are facing an active plumbing emergency that requires immediate water shutoff and repair, or planning a future water heater upgrade, slab leak inspection, or whole-home repipe, Texas Pro Plumbing is ready to assist you. Our customer dispatch center operates 24 hours a day, 7 days a week.
            </p>

            <!-- 24/7 Hotline Hero Box -->
            <div class="card" style="background: var(--color-brand-orange); color: #ffffff; padding: 2.25rem; border-radius: var(--radius-xl); width: 100%; box-shadow: var(--shadow-orange-glow); margin-bottom: 2rem;">
              <span class="plumbzo-pill dark" style="margin-bottom: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Direct Phone Dispatch
              </span>
              <div style="font-size: clamp(1.8rem, 3vw, 2.4rem); font-family: var(--font-heading); font-weight: 900; line-height: 1.1; margin-bottom: 0.5rem;">
                <a href="tel:8005557586" style="color: #ffffff; text-decoration: none;">(800) 555-7586</a>
              </div>
              <div style="font-size: 0.92rem; opacity: 0.9; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.25); padding-top: 0.75rem;">
                ⚡ <strong>Operating Hours:</strong> 24/7 Emergency Service, 365 Days a Year (Nights, Weekends & Holidays)
              </div>
            </div>

            <!-- Operations & Licensing Details -->
            <div style="display: flex; flex-direction: column; gap: 1.25rem; width: 100%;">
              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div class="brand-icon-box" style="width: 44px; height: 44px; font-size: 1.2rem; flex-shrink: 0;">
                  📍
                </div>
                <div>
                  <h4 style="color: var(--text-main); margin-bottom: 0.2rem; font-size: 1.05rem;">Statewide Operations Center</h4>
                  <p style="font-size: 0.94rem; color: var(--text-muted); margin: 0;">
                    Central Dispatch Hub: Austin, TX • Decentralized Regional Service Hubs Across All Texas Counties
                  </p>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; align-items: flex-start;">
                <div class="brand-icon-box" style="width: 44px; height: 44px; font-size: 1.2rem; flex-shrink: 0;">
                  🛡️
                </div>
                <div>
                  <h4 style="color: var(--text-main); margin-bottom: 0.2rem; font-size: 1.05rem;">State Licensing & Insurance</h4>
                  <p style="font-size: 0.94rem; color: var(--text-muted); margin: 0;">
                    Regulated by Texas State Board of Plumbing Examiners (TSBPE) • Master Plumber Lic #M-41982 • $1,000,000 General Liability Insured
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Intake Form -->
          <div style="width: 100%;">
            <div class="card" style="padding: 2.75rem 2.25rem; box-shadow: var(--shadow-hover); border-radius: var(--radius-xl); background: #ffffff; border: 1.5px solid var(--border-medium);">
              <div class="hero-form-header">
                <span class="plumbzo-pill orange" style="margin-bottom: 0.4rem;">Online Dispatch Request</span>
                <h3 style="font-size: 1.55rem; color: var(--text-main); margin-bottom: 0.25rem;">Request Service or Free Estimate</h3>
                <p style="font-size: 0.92rem; color: var(--text-muted); margin: 0;">Direct intake to certified master plumbers in your city</p>
              </div>

              <form id="contact-page-form" onsubmit="return false;" style="margin-top: 1.5rem;">
                <div class="form-group">
                  <label class="form-label" for="contact-service">Select Plumbing Service *</label>
                  <select class="form-control" id="contact-service" required>
                    <option value="" disabled selected>Select Service Needed...</option>
                    ${servicesData.map(s => `
                      <option value="${s.title}">${s.title}</option>
                    `).join('')}
                    <option value="General Plumbing Repair">General Plumbing Repair / Other</option>
                  </select>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="contact-city">Texas City / Hub *</label>
                    <select class="form-control" id="contact-city" required>
                      <option value="" disabled selected>Select City...</option>
                      ${citiesData.map(c => `
                        <option value="${c.name}">${c.name} (${c.county})</option>
                      `).join('')}
                      <option value="Other Texas City">Other Texas Area</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="contact-zip">Zip Code</label>
                    <input type="text" class="form-control" id="contact-zip" placeholder="75001" maxlength="5">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="contact-name">Your Full Name *</label>
                    <input type="text" class="form-control" id="contact-name" placeholder="John Doe" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="contact-phone">Phone Number *</label>
                    <input type="tel" class="form-control" id="contact-phone" placeholder="(555) 000-0000" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-details">Problem Description / Notes (Optional)</label>
                  <textarea class="form-control" id="contact-details" rows="3" placeholder="Describe the plumbing problem or installation requirement..."></textarea>
                </div>

                <button type="button" class="btn btn-primary form-submit-btn open-lead-modal" id="contact-submit-btn">
                  Submit Service Request →
                </button>

                <p class="form-privacy-note">
                  🔒 100% Free & No-Obligation. Itemized upfront quote before any work begins.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. REGIONAL SERVICE HUBS QUICK DIRECTORY -->
    <section class="section section-subtle" aria-label="10 Regional Texas Dispatch Centers">
      <div class="container">
        <div class="section-header">
          <span class="plumbzo-pill orange">Statewide Coverage</span>
          <h2>10 Regional Texas Dispatch Centers</h2>
          <p>
            Local master plumbers on standby across Texas for rapid 30 to 45-minute emergency response:
          </p>
        </div>

        <div class="hubs-interactive-grid">
          ${citiesData.map(c => `
            <div class="hub-clean-card">
              <h3 class="hub-clean-title">
                <a href="${c.path}" data-link>${c.name}, TX</a>
              </h3>
              <p class="hub-clean-text">
                Serving ${c.county} with 24/7 emergency leak repair, sewer rooter services, and water heater swaps.
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
